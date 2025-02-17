package com.leojgp.linkmeqr.uiview.viewmodel

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class StudentViewModel : ViewModel(){
    val studentModel = MutableLiveData<String>()

    fun updateStudent(addStudent:String){
        studentModel.postValue(addStudent)
    }
}