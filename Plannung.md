# Projektplanung: Highscore-Listen Applikation

## Komponenten

### Frontend
- **Technologie**: HTML, CSS, JavaScript (optional React.js)
- **Funktion**: Benutzeroberfläche für Registrierung, Login und Highscore-Anzeige
- **Formulare**:
  - **Registrierung**:
    - Felder: `email`, `password`, `confirmPassword`, `street`, `city`, `postalCode`
    - Validierung: E-Mail-Format, Passwortlänge, Passwortübereinstimmung, Pflichtfelder
  - **Login**:
    - Felder: `email`, `password`
    - Validierung: E-Mail-Format, Pflichtfelder

### Backend
- **Technologie**: Node.js, Express.js
- **Funktion**: REST API für Registrierung, Login und Highscore-Listen-Verwaltung
- **Datenbank**: MongoDB zur Speicherung von Nutzerdaten und Highscores

## Variablen

### Frontend
- `email`, `password`, `confirmPassword`, `authToken`, `address` (bestehend aus `street`, `city`, `postalCode`), `company`

### Backend
- `email`, `password`, `confirmPassword`, `address` (bestehend aus `street`, `city`, `postalCode`), `company`, `score`

## Kommunikation

### Frontend <-> Backend
- Registrierung: POST `/register`
- Login: POST `/login`
- Highscores anzeigen: GET `/highscores` (mit Authentifizierung)

## Technologien

- Frontend: HTML, CSS, JavaScript (optional React.js)
- Backend: Node.js, Express.js
- Datenbank: MongoDB

## OpenAPI Spezifikation
- Siehe `open-apispecification.json` im Projektordner
