def main(device, *args, **kwargs):
    device.shell('input tap 732 1724')
    device.shell('input tap 100 1290')
    device.shell('input tap 620 1978')
    device.shell('input tap 182 1939')
    device.shell('pm grant com.android.chrome android.permission.RECORD_AUDIO')
    device.shell('pm grant com.android.chrome android.permission.CAMERA')
    device.shell('pm grant com.android.chrome android.permission.WRITE_EXTERNAL_STORAGE')
    device.shell('pm grant com.android.chrome android.permission.READ_EXTERNAL_STORAGE')
    pass
