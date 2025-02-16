package com.leojgp.linkmeqr.core.navigation

import androidx.compose.runtime.Composable
import androidx.lifecycle.findViewTreeLifecycleOwner
import androidx.navigation.compose.rememberNavController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.leojgp.linkmeqr.Fetch.RetrofitServiceFactory
import com.leojgp.linkmeqr.screens.HomeScreen
import com.leojgp.linkmeqr.screens.LoginScreen
import com.leojgp.linkmeqr.screens.SingUpScreen

@Composable
fun NavigationWrapper() {

    //Es el objeto que gestiona todo en la navegación (ir, volver)
    val navController = rememberNavController()
    NavHost(navController = navController, startDestination = Home) {
        //Para poder definir las Screens debemos poner composable<nombreScreen>
        composable<Home> {
            HomeScreen(navigateToLogin = {navController.navigate(Login)}, navigateToSignUp =  {navController.navigate(SignUp)})
        }
        composable<Login> {
            LoginScreen()
        }
        composable<SignUp> {
            SingUpScreen()
        }

    }
}