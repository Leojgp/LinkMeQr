package com.leojgp.linkmeqr.uiview.view.screens

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.livedata.observeAsState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.sp
import com.leojgp.linkmeqr.uiview.viewmodel.StudentViewModel

@Composable
fun LoginScreen(navigateToInfo:() -> Unit,viewModel: StudentViewModel){
    val student by viewModel.studentModel.observeAsState()
    Column(modifier = Modifier.fillMaxSize(), horizontalAlignment = Alignment.CenterHorizontally) {
        Spacer(modifier = Modifier.weight(1f))
        Text(text = "LOGIN SCREEN", fontSize = 25.sp)
        Spacer(modifier = Modifier.weight(1f))
        Text(text = student.toString() ?: "Loading....")
        Spacer(modifier = Modifier.weight(1f))
        Button(onClick = { navigateToInfo()}){
            Text("Navigate to Info")
        }
        Button(onClick = {viewModel.getStudent("Fran01")}) {
            Text("Pulse")
        }
        Spacer(modifier = Modifier.weight(1f))
    }

}