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
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.livedata.observeAsState
import com.leojgp.linkmeqr.uiview.viewmodel.StudentViewModel

@Composable
fun InfoScreen(viewModel: StudentViewModel) {
    val student by viewModel.studentModel.observeAsState()
    // Hago que la llamada se haga solo una vez
    LaunchedEffect(Unit) {
        viewModel.getStudent()
    }
    Column(modifier = Modifier.fillMaxSize(), horizontalAlignment = Alignment.CenterHorizontally) {
        Spacer(modifier = Modifier.weight(1f))
        Text(text = "INFO SCREEN", fontSize = 25.sp)
        Spacer(modifier = Modifier.weight(1f))
        Text(text = student?.toString() ?: "Loading...")
        Spacer(modifier = Modifier.weight(1f))
    }
}
