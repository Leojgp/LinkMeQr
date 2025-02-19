package com.leojgp.linkmeqr.uiview.view

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.viewModels
import com.leojgp.linkmeqr.uiview.view.navigation.NavigationWrapper
import com.leojgp.linkmeqr.ui.theme.LinkMeQrTheme
import com.leojgp.linkmeqr.uiview.viewmodel.StudentViewModel

class MainActivity : ComponentActivity() {

    private val studentViewModel: StudentViewModel by viewModels()
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            LinkMeQrTheme {
                NavigationWrapper(studentViewModel = studentViewModel)
            }
        }
    }
}

