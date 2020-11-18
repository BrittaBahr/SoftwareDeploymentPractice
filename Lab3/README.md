## Part 1

Im ersten Schritt habe ich ein `docker-compose.yaml` erzeugt.

Mit dem Command: `docker-compose -d` starte ich den Docker Container. Somit kann die Webseite (wordpress) erreicht werden unter: localhost:3000.

## Part 2

##### Die wichtige Bestandteile: 
-) `init.sql` -> Die Datei ist für das generieren der Datenbank.

-) `Dockerfile` -> Zuerst wird das System aktualisiert und dann anschließend SQL installiert.
   Dannach setztn wir die notwendigen Umgebungsvariabeln

-) `docker-entypoint.sh` -> Das Skript setzt die SQL-Konfigurationsdatei unter Verwendung Umgebungsvariablen aus dem "Dockerfile".

### Deployment

1. Im Terminal in der Ordner "mySQL" gehen und dann anschließend den Befehl `docker build -t sql .` ausführen. 

2. Das gleiche machen wir im Ordner "wp" und führen hier den Befehl `docker build -t wp .` aus.

3. Als letzten Schritt: Gehe wieder über das Terminal in den Ordner, wo sich die 'docker-compose.yaml' Datei befindet und führe folgenden Befehl aus: `docker-compose up -d`.

4. Die Seite kann nun unter localhost:80 erreicht werden.