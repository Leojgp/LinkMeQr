package com.leojgp.linkmeqr.uiview.viewmodel

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.leojgp.linkmeqr.model.Retrofit.RetrofitServiceFactory
import com.leojgp.linkmeqr.model.entities.Student
import com.leojgp.linkmeqr.model.websocket.WebSocketService
import kotlinx.coroutines.launch

val service = RetrofitServiceFactory.makeRetrofitService()

class StudentViewModel : ViewModel() {

    private val _studentModel = MutableLiveData<Student>()
    private val _username = MutableLiveData<String>()

    val studentModel: LiveData<Student> = _studentModel
    val username: LiveData<String> = _username

    private val webSocketService = WebSocketService.getInstance()

    init {
        viewModelScope.launch {
            webSocketService.connect()
        }
    }

    fun getStudent() {
        viewModelScope.launch {
            val response = service.listStudents(_username.value ?: "")
            response?.let {
                _studentModel.postValue(it)
            }
        }
    }

    fun sendStudentDataToWebSocket(user: String, name: String, grade: String, city: String) {
        viewModelScope.launch {
            val student = Student(
                user = user,
                password = "",
                nombre = name,
                grado = grade,
                aula = "",
                ordenador = null,
                ciudad = city,
                usaBus = false
            )
            webSocketService.sendStudentLogin(student)
        }
    }

    fun changeUserName(name: String) {
        _username.postValue(name)
    }

}