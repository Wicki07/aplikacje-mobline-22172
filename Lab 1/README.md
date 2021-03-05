# Aplikacje mobilne

### Autor: Mateusz Wicki Grupa: 185IC_A1

# Lab1 Kalkulator

Do wykonania zadania można było posłużyć się przeglądarką, emulatorem np. dostępnym w Android Studio lub własnym telefonem. Wykorzystałem własny telefon i przeglądarkę

Podstawą do wykonania zadania jest funkcja licząca. Jest to `eval()` i jest ona dostępna. Jest to funkcja szacująca wynik na podstawie podanego stringa.

```JS
  calculate(){
    this.setState({
      calculationText:eval(this.state.outcome)
    })
  }
```
