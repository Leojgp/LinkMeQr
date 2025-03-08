package com.leojgp.linkmeqr.uiview.view.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.leojgp.linkmeqr.uiview.view.screens.*
import com.leojgp.linkmeqr.uiview.viewmodel.StudentViewModel

@Composable
fun NavigationWrapper(studentViewModel: StudentViewModel) {
    val navController = rememberNavController()
    NavHost(navController = navController, startDestination = Home) {
        composable<Home> {
            HomeScreen(
                navigateToLogin = { navController.navigate(Login) },
                navigateToSignUp = { navController.navigate(SignUp) }
            )
        }

        composable<Login> {
            LoginScreen(
                navigateToInfo = { navController.navigate(Info) },
                viewModel = studentViewModel
            )
        }

        composable<SignUp> {
            SignUpScreen()
        }

        composable<Info> {
            InfoScreen(
                viewModel = studentViewModel,
                navigateToStats = { navController.navigate(Stats) }
            )
        }

        composable<Stats> {
            StatsScreen()
        }
    }
}
