package com.leojgp.linkmeqr.uiview.viewmodel

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.leojgp.linkmeqr.model.Retrofit.RetrofitServiceFactory
import com.leojgp.linkmeqr.model.entities.Student
import kotlinx.coroutines.launch

class StudentViewModel : ViewModel(){
    private val _studentModel = MutableLiveData<Student>()
    private val _username = MutableLiveData<String>()
    val studentModel: LiveData<Student> = _studentModel
    val username: LiveData<String> = _username

    fun getStudent() {
        viewModelScope.launch {
            val service = RetrofitServiceFactory.makeRetrofitService()
            val response = service.listStudents(_username.value?: "")
            if(response!=null){
                _studentModel.postValue(response)
            }else{
                Log.i("Error en getStudents","Ha ocurrido un error al obtener el estudiante con nombre $_username")
            }
        }
    }
    fun changeUserName(name:String){
        _username.postValue(name)
    }
}