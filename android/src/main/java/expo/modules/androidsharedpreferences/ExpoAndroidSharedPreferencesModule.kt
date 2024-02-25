package expo.modules.androidsharedpreferences

import android.content.Context
import android.content.SharedPreferences
import android.preference.PreferenceManager
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoAndroidSharedPreferencesModule : Module() {

  private val context
    get() = requireNotNull(appContext.reactContext)

  private val sharedPreferences by lazy {
    context.getSharedPreferences("${context.packageName}_preferences", Context.MODE_PRIVATE)
  }

  private val preferenceChangeListener = SharedPreferences.OnSharedPreferenceChangeListener { _, key ->
    val value = sharedPreferences.getString(key, null)

    sendEvent("onChange", mapOf(
      "key" to key,
      "value" to value
    ))
  }
  override fun definition() = ModuleDefinition {

    Name("ExpoAndroidSharedPreferences")

    Events("onChange")

    OnCreate {
      sharedPreferences.registerOnSharedPreferenceChangeListener(preferenceChangeListener)
    }

    Function("get") { key: String ->
      sharedPreferences.getString(key, null)
    }

    Function("set") { key: String, value: String ->
      sharedPreferences.edit().putString(key, value).apply()
    }
  }
}
