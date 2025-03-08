    package com.leojgp.linkmeqr.model.entities

    import kotlinx.serialization.Serializable

    @Serializable
    data class Student(
        val user: String,
        val password: String,
        val nombre: String,
        val grado: String,
        val aula: String,
        val ordenador: Int? = null,
        val ciudad: String,
        val usaBus: Boolean
    )
