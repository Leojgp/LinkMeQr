package com.leojgp.linkmeqr.uiview.view.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.toRoute
import com.leojgp.linkmeqr.uiview.view.screens.HomeScreen
import com.leojgp.linkmeqr.uiview.view.screens.InfoScreen
import com.leojgp.linkmeqr.uiview.view.screens.LoginScreen
import com.leojgp.linkmeqr.uiview.view.screens.SingUpScreen
import com.leojgp.linkmeqr.uiview.viewmodel.StudentViewModel

@Composable
fun NavigationWrapper(studentViewModel: StudentViewModel) {

    //Es el objeto que gestiona todo en la navegación (ir, volver)
    val navController = rememberNavController()
    NavHost(navController = navController, startDestination = Home) {
        //Para poder definir las Screens debemos poner composable<nombreScreen>
        composable<Home> {
            HomeScreen(navigateToLogin = {navController.navigate(Login)}, navigateToSignUp =  {navController.navigate(
                SignUp
            )})
        }
        composable<Login> {
            LoginScreen{navController.navigate(Info(studentViewModel.studentModel)) }
        }
        composable<SignUp> {
            SingUpScreen()
        }
        composable<Info>{ backStackEntry ->
            val info: Info = backStackEntry.toRoute()

            InfoScreen()
        }

    }
}