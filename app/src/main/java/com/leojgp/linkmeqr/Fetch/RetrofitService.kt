package com.leojgp.linkmeqr.Fetch

import com.leojgp.linkmeqr.entities.Student
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.Path
import retrofit2.http.Query


interface RetrofitService {

    //Esta es la parte que cambia para cada una de las peticiones
    @GET("/students/{id}")
    suspend fun listStudents(
        //En caso cambie algo en la URL estática que hay en el GET(URL)
        @Path("id") id:String
        //@Path("type") type:String,
    ):Student

    @POST("/signupStudent")
    suspend fun signUpStudent(
    @Body student: Student
    )
}

object RetrofitServiceFactory{

    fun makeRetrofitService(): RetrofitService{
        return Retrofit.Builder()
            .baseUrl("http://192.168.1.70:3000/")
            // Convierte el resultado de la petición a objeto y viceversa
            .addConverterFactory(GsonConverterFactory.create())
            .build().create(RetrofitService::class.java)
    }
}