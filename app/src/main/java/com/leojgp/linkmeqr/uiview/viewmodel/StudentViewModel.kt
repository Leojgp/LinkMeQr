package com.leojgp.linkmeqr.uiview.viewmodel

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class StudentViewModel : ViewModel(){
    private val _studentModel = MutableLiveData<String>("Hola esto es una prueba")
    val studentModel: LiveData<String> = _studentModel

    fun updateStudent(addStudent:String){
        _studentModel.postValue(addStudent)
    }
}