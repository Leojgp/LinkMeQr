package com.leojgp.linkmeqr.uiview.view.navigation

import kotlinx.serialization.Serializable

//Para poder usar estos objetos en la navegación tenemos que ponerle la etiqueta Serializable
@Serializable
object Login

@Serializable
object Home

@Serializable
data class Info(val students:List<String>)

@Serializable
object SignUp
