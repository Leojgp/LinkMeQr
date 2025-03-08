package com.leojgp.linkmeqr.uiview.view.screens

import android.util.Log
import androidx.compose.foundation.layout.*
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.leojgp.linkmeqr.model.websocket.WebSocketService
import com.patrykandpatrick.vico.compose.axis.horizontal.rememberBottomAxis
import com.patrykandpatrick.vico.compose.axis.vertical.rememberStartAxis
import com.patrykandpatrick.vico.compose.chart.Chart
import com.patrykandpatrick.vico.compose.chart.column.columnChart
import com.patrykandpatrick.vico.core.entry.ChartEntryModelProducer
import com.patrykandpatrick.vico.core.entry.FloatEntry

@Composable
fun StatsScreen() {
    val webSocketService = remember { WebSocketService.getInstance() }
    val cities by webSocketService.cities.collectAsState(emptyList())

    LaunchedEffect(Unit) {
        webSocketService.connect()
    }

    DisposableEffect(Unit) {
        onDispose {
            webSocketService.disconnect()
        }
    }

    Log.i("StatsScreen", "Ciudades recibidas: $cities")

    val citiesCount = remember(cities) {
        cities.groupingBy { it }.eachCount()
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        Text(
            text = "Estadísticas de Ciudades",
            fontSize = 24.sp,
            fontWeight = FontWeight.Bold
        )

        Spacer(modifier = Modifier.height(16.dp))

        Text(
            text = "Ciudades y número de estudiantes",
            fontSize = 18.sp
        )

        Spacer(modifier = Modifier.height(16.dp))

        if (citiesCount.isNotEmpty()) {
            VicoBarChart(
                data = citiesCount,
                modifier = Modifier
                    .fillMaxWidth()
                    .height(250.dp)
                    .padding(vertical = 8.dp)
            )
        } else {
            Text("No hay datos disponibles")
        }
    }
}

@Composable
fun VicoBarChart(data: Map<String, Int>, modifier: Modifier = Modifier) {
    val entries = remember(data) {
        data.entries.mapIndexed { index, entry ->
            FloatEntry(index.toFloat(), entry.value.toFloat())
        }
    }

    val modelProducer = remember(entries) {
        ChartEntryModelProducer(entries)
    }

    Column(modifier = modifier) {
        Chart(
            chart = columnChart(),
            chartModelProducer = modelProducer,
            startAxis = rememberStartAxis(),
            bottomAxis = rememberBottomAxis(valueFormatter = { value, _ ->
                data.keys.toList().getOrNull(value.toInt()) ?: ""
            }),
            modifier = Modifier
                .fillMaxWidth()
                .height(250.dp)
        )
    }
}
