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

Następnym elemntem było przypisanie odpowiednich operacji. Należy zauważyć że aby `eval()` poprawnie wykonało potęgowanie należy operator zapisać jako `**`. Dodałem również opcję działań w nawiasach.

```JS
  action(action){
    switch(action){
      case 'C':
        this.setState({
          outcome: "",
          calculationText:"0",
        })
        this.bracket = true
        this.openBrackets = 0
        break;
      case '()':
        if(this.bracket){
          this.setState({
            outcome: this.state.outcome + '('
          })
          this.bracket = false
          this.openBrackets++
        }
        else{
          if(this.openBrackets > 0)
          {
            this.setState({
              outcome: this.state.outcome + ')'
            })
            this.openBrackets--
          }
        }
        break;
      case '^':
        action = '**'
      case '+':
      case '*':
      case '-':
      case '/':
      case 'e':

      const lastChar = this.state.outcome.split('').pop()
      if(this.chars.indexOf(lastChar)!= -1)return
      if(this.state.outcome == ''){
        if(action=='-'){
          this.setState({
            outcome: this.state.outcome + action
          })
        }
        return
      }
      this.setState({
        outcome: this.state.outcome + action
      })
      this.bracket = true
    }
  }
```

Następnym krokiem dodanie funkcji odpowiadającej za znak `=`, `,` oraz wszystkie cyfry

```JS
numbPressed(value){
    const lastChar = this.state.outcome.split('').pop()
    if(value == '='){
      return this.calculate()
    }
    else if(value == '.'){
      if(this.state.outcome == '')return
      if(lastChar =='.') return
      this.setState({
        outcome: this.state.outcome + value
      })
    }
    else{
      if(this.openBrackets != 0){
        this.setState({
          outcome: this.state.outcome+value,
        })
      }
      else{
        this.setState({
          outcome: this.state.outcome+value,
          calculationText:eval(this.state.outcome+value)
        })
      }
    }
      this.bracket = false
  }
```
Przy pomocy `react icon` dodałem ikonę usuwania 

```JS
<Icon name='delete' type='feather' size={30} style={{color: 'blue',}} raised onPress={() => this.delete()} iconStyle={styles.iconStyle} />
```

Poniżej funkcja odpowiadająca za jego działanie

```JS
  delete(){
    let text = this.state.outcome.split('')
    text.pop()
    this.setState({
      outcome: text.join('')
    })
  }
```

Osobno ostylowałem kalkulator jednak inaczej wyświetla się on w przeglądarce a inaczej w telefonie

[](https://imgur.com/6deFGmu)
[](https://i.imgur.com/kzrMbul.png)
[Imgur](https://imgur.com/6deFGmu)

Poniżej jeszcze za zdjęcia z aplikacji

[](https://i.imgur.com/bTNArql.png)

[](https://i.imgur.com/Xg9VVPK.png)

