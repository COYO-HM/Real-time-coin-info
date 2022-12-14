# REAL TIME COIN INFO

## Introduction

![ezgif com-gif-maker](https://user-images.githubusercontent.com/56423604/190421413-cf6b119d-705e-452b-90df-23c669a102e9.gif)

코인 정보와 실시간 가격을 CANDLE STICK CHART로 볼 수 있는 사이트 입니다.

## Quick Start

```shell
npm install
npm start
```

## Tech Stack

- react v_18.2.0
- react-router-dom v_6.3.0
- typescript v_4.7.4
- styled-components v_5.3.5
- recoil v_0.7.4
- react-helmet v_6.1.0
- react-query v_4.0.0
- react-apexcharts v_1.4.0
- eslint

## Project Structure

```Plain Text
src
├── api ──────────────────  Fetching Data
│
├── atoms ────────────────  Global State
│
├── components ───────────  view 컴포넌트
│   ├── Charts
│   └── ToggleSwitch
│
├── images ───────────────  이미지 파일
│
├── pages ────────────────  페이지
│   ├── Coin
│   └── Home
│
├── style ────────────────  styled-components' custom style & theme & GlobalStyle
│   ├── globalStyle
│   ├── index
│   ├── styled.d.ts
│   └── theme
│
├── App.js ───────────────  Route 처리 & Theme Context 적용 & GlobalStyle 적용
│
└── index.js ─────────────  애플리케이션 엔트리 포인트
```
