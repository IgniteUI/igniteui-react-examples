@echo off 
REM ECHO cleanup %cd% ...
FOR %%I IN (.) DO set TARGET=%%~nxI
ECHO cleanup %TARGET% ...

ECHO - removing %TARGET%\**\node_modules folders in all samples:
REM FOR /F "tokens=*" %%G IN ('DIR /B /AD /S node_modules') DO ECHO "%%G"
    FOR /F "tokens=*" %%G IN ('DIR /B /AD /S node_modules') DO RMDIR /S /Q "%%G" 

ECHO - removing %TARGET%\**\build folders in all samples:
    FOR /F "tokens=*" %%G IN ('DIR /B /AD /S build') DO RMDIR /S /Q "%%G" 

ECHO cleanup %TARGET% completed.
pause
