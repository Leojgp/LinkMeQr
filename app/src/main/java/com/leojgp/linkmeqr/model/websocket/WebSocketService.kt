package com.leojgp.linkmeqr.model.websocket

import android.util.Log
import com.leojgp.linkmeqr.model.entities.Student
import io.socket.client.IO
import io.socket.client.Socket
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import org.json.JSONArray
import org.json.JSONObject

class WebSocketService {

    private var socket: Socket? = null

    private val serverUrl = "http://192.168.1.26:3001"

    private val _cities = MutableStateFlow<List<String>>(emptyList())
    val cities = _cities.asStateFlow()

    suspend fun connect() {
        try {
            socket = IO.socket(serverUrl)

            socket?.on(Socket.EVENT_CONNECT) {
                Log.i("WebSocket", "WebSocket conectado")
            }

            socket?.on("cities") { args ->
                if (args.isNotEmpty()) {
                    val citiesArray = args[0] as JSONArray
                    val citiesList = List(citiesArray.length()) { citiesArray.getString(it) }

                    _cities.value = citiesList
                    Log.i("WebSocket", "Ciudades recibidas: $citiesList")
                }
            }

            socket?.connect()
        } catch (e: Exception) {
            Log.e("WebSocket", "Error al conectar WebSocket: ${e.message}")
        }
    }

    suspend fun sendStudentLogin(student: Student) {
        try {
            Log.i("WebSocket", "Enviando studentLogin con studentId: ${student.user}, studentName: ${student.nombre}, ciudad: ${student.ciudad}")

            val studentData = JSONObject().apply {
                put("studentId", student.user)
                put("studentName", student.nombre)
                put("ciudad", student.ciudad)
            }

            socket?.emit("studentLogin", studentData)
        } catch (e: Exception) {
            Log.e("WebSocket", "Error al enviar login del estudiante: ${e.message}")
        }
    }

    fun disconnect() {
        Log.i("WebSocket", "WebSocket sigue conectado.")
    }

    companion object {
        private var instance: WebSocketService? = null
        fun getInstance(): WebSocketService {
            if (instance == null) {
                instance = WebSocketService()
            }
            return instance!!
        }
    }
}
