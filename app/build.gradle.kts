plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    alias(libs.plugins.kotlin.compose)
    alias(libs.plugins.jetbrainsKotlinSerialization)
}

android {
    namespace = "com.leojgp.linkmeqr"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.leojgp.linkmeqr"
        minSdk = 24
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
    kotlinOptions {
        jvmTarget = "11"
    }
    buildFeatures {
        compose = true
    }
}

dependencies {
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.lifecycle.runtime.ktx)
    implementation(libs.androidx.activity.compose)
    implementation(platform(libs.androidx.compose.bom))
    implementation(libs.androidx.ui)
    implementation(libs.androidx.ui.graphics)
    implementation(libs.androidx.ui.tooling.preview)
    implementation(libs.androidx.material3)
    implementation(libs.androidx.navigation.compose)
    implementation(libs.kotlinx.serialization.json)
    implementation(libs.vico.compose)
    implementation(libs.vico.compose.m2)
    implementation(libs.vico.compose.m3)
    implementation(libs.vico.views)
    implementation("io.ktor:ktor-client-core:2.3.0")
    implementation("io.ktor:ktor-client-android:2.3.0")
    implementation("io.ktor:ktor-client-serialization:2.3.0")
    implementation("io.ktor:ktor-client-json:2.3.0")
    implementation("com.squareup.retrofit2:retrofit:2.9.0")
    implementation("com.squareup.retrofit2:converter-gson:2.9.0")
    implementation("androidx.lifecycle:lifecycle-viewmodel-ktx:2.3.1")
    implementation("androidx.lifecycle:lifecycle-livedata-ktx:2.3.1")
    implementation ("io.socket:socket.io-client:2.0.1")
    implementation ("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.3.9")
    implementation(libs.androidx.runtime.livedata)
    testImplementation(libs.junit)
    androidTestImplementation(libs.androidx.junit)
    androidTestImplementation(libs.androidx.espresso.core)
    androidTestImplementation(platform(libs.androidx.compose.bom))
    androidTestImplementation(libs.androidx.ui.test.junit4)
    debugImplementation(libs.androidx.ui.tooling)
    debugImplementation(libs.androidx.ui.test.manifest)
}
