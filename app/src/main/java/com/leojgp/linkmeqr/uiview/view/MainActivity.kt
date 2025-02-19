package com.leojgp.linkmeqr.uiview.view

import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.viewModels
import androidx.lifecycle.Observer
import androidx.lifecycle.lifecycleScope
import com.leojgp.linkmeqr.uiview.view.navigation.NavigationWrapper
import com.leojgp.linkmeqr.model.Retrofit.RetrofitServiceFactory
import com.leojgp.linkmeqr.ui.theme.LinkMeQrTheme
import com.leojgp.linkmeqr.uiview.viewmodel.StudentViewModel
import kotlinx.coroutines.launch
import com.leojgp.linkmeqr.model.entities.Student

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

