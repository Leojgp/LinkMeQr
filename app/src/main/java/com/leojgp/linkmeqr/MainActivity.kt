package com.leojgp.linkmeqr

import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.lifecycle.lifecycleScope
import com.leojgp.linkmeqr.core.navigation.NavigationWrapper
import com.leojgp.linkmeqr.Fetch.RetrofitServiceFactory
import com.leojgp.linkmeqr.ui.theme.LinkMeQrTheme
import kotlinx.coroutines.launch

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        val service = RetrofitServiceFactory.makeRetrofitService()
        lifecycleScope.launch {
            try {
                val students = service.listStudents("Fran01")
                // Voy a mostrar por el log para ver si se han recogido correctamente los datos
                Log.d("Recoger Datos Estudiante: ", students.toString())
                println("Todo ha salido bien")
            } catch (e: Exception) {
                e.printStackTrace()
                println("Ha ocurrido un error en la petición")
            }
        }

        setContent {
            LinkMeQrTheme {
                NavigationWrapper()
            }
        }
    }
}

