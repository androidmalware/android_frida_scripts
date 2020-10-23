# android_frida_scripts

## 1) file_exists.js

**Info**

This Frida script helps dynamically identify accessed zip files on external media (possible file traversal vulnerability) and existence of .so (native libraries) files on internal media that might be overwritten and executed. Such combination could lead to arbitrary code execution.

**Impact**

Identify ACE

**Output**
![alt text](https://github.com/androidmalware/android_frida_scripts/raw/main/doc/file_exists_output.png)

Script was created based on @_bagipro tip - https://twitter.com/_bagipro/status/1319365830728208386
