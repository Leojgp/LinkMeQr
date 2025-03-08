package com.leojgp.linkmeqr.uiview.view.screens

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.unit.sp
import com.leojgp.linkmeqr.uiview.viewmodel.StudentViewModel

@Composable
fun LoginScreen(navigateToInfo: () -> Unit, viewModel: StudentViewModel) {
    var text by remember { mutableStateOf(TextFieldValue("")) }
    Column(modifier = Modifier.fillMaxSize(), horizontalAlignment = Alignment.CenterHorizontally) {
        Spacer(modifier = Modifier.weight(1f))
        Text(text = "LOGIN SCREEN", fontSize = 25.sp)
        Spacer(modifier = Modifier.weight(1f))
        TextField(
            value = text,
            onValueChange = { newText -> text = newText }
        )
        Button(onClick = {
            navigateToInfo()
            viewModel.changeUserName(text.text)
        }) {
            Text("Submit")
        }
        Spacer(modifier = Modifier.weight(1f))
    }
}
