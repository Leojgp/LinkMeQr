package com.leojgp.linkmeqr.core.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.leojgp.linkmeqr.LoginScreen

@Composable
fun NavigationWrapper() {
    //Es el objeto que gestiona todo en la navegación (ir, volver)
    val navController = rememberNavController()
    NavHost(navController = navController, startDestination = Login) {
        //Para poder definir las Screens debemos poner composable<nombreScreen>
        composable<Login> {
            LoginScreen()
        }
    }
}