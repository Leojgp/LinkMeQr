package com.leojgp.linkmeqr.uiview.view.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.foundation.lazy.items

@Composable
fun InfoScreen(students: List<String>) {
    Column(modifier = Modifier.fillMaxSize(), horizontalAlignment = Alignment.CenterHorizontally) {
        Spacer(modifier = Modifier.weight(1f))
        Text(text = "INFO SCREEN", fontSize = 25.sp)
        Spacer(modifier = Modifier.weight(1f))

        Button(onClick = {}) {
            Text("Añadir Estudiante")
        }

        LazyColumn(
            modifier = Modifier.fillMaxWidth()
        ) {
            items(students) { nombre ->
                Text(
                    text = nombre,
                    fontSize = 20.sp,
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(8.dp)
                )
            }
        }

        Spacer(modifier = Modifier.weight(1f))

        Text("Estudiantes: ${students.joinToString(", ")}")

        Spacer(modifier = Modifier.weight(1f))
    }
}
