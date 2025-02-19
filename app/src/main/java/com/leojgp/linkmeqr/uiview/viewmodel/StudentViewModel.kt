package com.leojgp.linkmeqr.uiview.viewmodel

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.leojgp.linkmeqr.model.Retrofit.RetrofitServiceFactory
import com.leojgp.linkmeqr.model.entities.Student
import kotlinx.coroutines.launch

class StudentViewModel : ViewModel(){
    private val _studentModel = MutableLiveData<Student>()
    val studentModel: LiveData<Student> = _studentModel

    fun getStudent(name:String) {
        viewModelScope.launch {
            val service = RetrofitServiceFactory.makeRetrofitService()
            val response = service.listStudents(name)
            _studentModel.postValue(response)
        }
    }
}