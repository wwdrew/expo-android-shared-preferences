package expo.modules.androidsharedpreferences

import android.content.Context
import android.content.SharedPreferences
import android.preference.PreferenceManager
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoAndroidSharedPreferencesModule : Module() {

  private val context
    get() = requireNotNull(appContext.reactContext)

  private fun sharedPreferences(filename: String? = null): SharedPreferences {
    val file = filename ?: "${context.packageName}_preferences"
    return context.getSharedPreferences(file, Context.MODE_PRIVATE)
  }
//  private val preferenceChangeListener = SharedPreferences.OnSharedPreferenceChangeListener { _, key ->
//    val value = sharedPreferences().getString(key, null)
//
//    sendEvent("onChange", mapOf(
//      "key" to key,
//      "value" to value
//    ))
//  }
  override fun definition() = ModuleDefinition {

    Name("ExpoAndroidSharedPreferences")

    Events("onChange")

//    OnCreate {
//      sharedPreferences().registerOnSharedPreferenceChangeListener(preferenceChangeListener)
//    }

    Function("contains") { key: String, filename: String? ->
      sharedPreferences(filename).contains(key)
    }

    Function("remove") { key: String, filename: String? ->
      sharedPreferences(filename).edit().remove(key).commit()
    }

    Function("clear") { filename: String? ->
      sharedPreferences(filename).edit().clear().commit()
    }
    
    // String
    Function("getString") { key: String, defaultValue: String?, filename: String? ->
      sharedPreferences(filename).getString(key, defaultValue)
    }

    Function("setString") { key: String, value: String, filename: String? ->
      sharedPreferences(filename).edit().putString(key, value).commit()
    }

    // Int
    Function("getInt") { key: String, defaultValue: Int?, filename: String? ->
      sharedPreferences(filename).getInt(key, defaultValue ?: 0)
    }

    Function("setInt") { key: String, value: Int, filename: String? ->
      val editor = sharedPreferences(filename).edit()
        editor.putInt(key, value)
          editor.commit()
    }

    // Long
    Function("getLong") { key: String, defaultValue: Long?, filename: String? ->
      sharedPreferences(filename).getLong(key, defaultValue ?: 0L)
    }

    Function("setLong") { key: String, value: Long, filename: String? ->
      sharedPreferences(filename).edit().putLong(key, value).commit()
    }

    // Float
    Function("getFloat") { key: String, defaultValue: Float?, filename: String? ->
      sharedPreferences(filename).getFloat(key, defaultValue ?: 0.0f)
    }

    Function("setFloat") { key: String, value: Float, filename: String? ->
      sharedPreferences(filename).edit().putFloat(key, value).commit()
    }

    // Boolean
    Function("getBoolean") { key: String, defaultValue: Boolean?, filename: String? ->
      sharedPreferences(filename).getBoolean(key, defaultValue ?: false)
    }

    Function("setBoolean") { key: String, value: Boolean, filename: String? ->
      sharedPreferences(filename).edit().putBoolean(key, value).commit()
    }
  }
}
