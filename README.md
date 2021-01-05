## expo 준비하기

```
npm i -g expo-cli
expo init fokin-weather

expo login
username, password 입력

npm start
좌측에 'Run on Android device/emulator'(안드로이드 스튜디오 있어야 함)
'Run on iOS simulator'(Xcode 있어야 함)
없어도 자기 휴대폰에 qr코드찍어서 'expo app'에서 실행시키면 된다.

여기서 문제는 컴퓨터 + 핸드폰 같은 와이파이에 연결 되어 있어야 한다.

npm run android
npm run ios
또한 시뮬레이터를 키는데 npm start 페이지에서 키는것만으로도 충분하다.
```

---

## 시뮬레이터 새로고침

- command + R or ctrl + R

---

## 개발자 메뉴

- 시뮬레이터: command + D or ctrl + D
- 휴대폰: 흔들기

---

```
div -> View
span -> Text
```

---

## ECONNRESET error

-> expo kill, npm start

---

```jsx
<View style={styles.container}>
    <Text style={styles.text}>Hello</Text>
    <StatusBar style="auto" />
</View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    width: '100%'
  },
});
```

- 일반 css와는 다르게 View태그에서 color를 주면 먹히지 않는다.
- 직접 Text태그에 color를 줘야한다.

---

```
웹 - flexDirection default: row
앱 - flexDirection default: column
```

