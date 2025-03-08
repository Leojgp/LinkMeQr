package com.leojgp.linkmeqr.uiview.view.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.livedata.observeAsState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.leojgp.linkmeqr.uiview.viewmodel.StudentViewModel

@Composable
fun InfoScreen(viewModel: StudentViewModel, navigateToStats: () -> Unit) {
    val student by viewModel.studentModel.observeAsState()

    LaunchedEffect(Unit) {
        viewModel.getStudent()
    }

    Column(
        modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Spacer(modifier = Modifier.weight(1f))
        Text(text = "INFO SCREEN", fontSize = 25.sp)
        Spacer(modifier = Modifier.weight(1f))

        student?.let { data ->
            LazyColumn(modifier = Modifier.fillMaxWidth().padding(16.dp)) {
                item {
                    Text(text = "Usuario: ${data.user}", fontSize = 18.sp, modifier = Modifier.padding(8.dp))
                    Text(text = "Nombre: ${data.nombre}", fontSize = 18.sp, modifier = Modifier.padding(8.dp))
                    Text(text = "Grado: ${data.grado}", fontSize = 18.sp, modifier = Modifier.padding(8.dp))
                    Text(text = "Aula: ${data.aula}", fontSize = 18.sp, modifier = Modifier.padding(8.dp))
                    Text(text = "Ordenador: ${data.ordenador ?: "No asignado"}", fontSize = 18.sp, modifier = Modifier.padding(8.dp))
                    Text(text = "Ciudad: ${data.ciudad}", fontSize = 18.sp, modifier = Modifier.padding(8.dp))
                    Text(text = "Usa Bus: ${if (data.usaBus) "Sí" else "No"}", fontSize = 18.sp, modifier = Modifier.padding(8.dp))
                }
            }

            Button(onClick = {
                viewModel.sendStudentDataToWebSocket(data.user, data.nombre, data.grado, data.ciudad)
                navigateToStats()
            }) {
                Text("Ver Estadísticas")
            }

        } ?: Text(text = "Loading...")

        Spacer(modifier = Modifier.weight(1f))
    }
}
