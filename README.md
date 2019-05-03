# gazua.to

> 가즈아!!!

[gazua.to](http://gazua.to)는 URL Shortener 오픈소스 프로젝트입니다.

## 개발환경

* Node.js, Express
* Firebase Function
* Firebase Firestore

## API

> TBD...

### Get short URL randomly

* Sample Request Body

```json
{
    "url": "https://inko.holy.kiwi"
}
```

* Sample Response

```json
{
    "result_code": 0,
    "message": "success",
    "data": {
        "short_url": "https://gazua.to/Ez4yBp",
    }
}
```

### Get short URL with customizing

* Sample Request Body

```json
{
    "url": "https://inko.holy.kiwi",
    "postfix": "inko",
}
```

* Sample Response

```json
// 성공
{
    "result_code": 0,
    "message": "success",
    "data": {
        "short_url": "https://gazua.to/inko",
    }
}

// 실패
{
    "result_code": 1,
    "message": "already occupied"
}
```

## TODO LIST

- [X] gazua.to 도메인 구매
- [ ] API 규격 작성
- [ ] 백엔드 개발
- [ ] 프론트엔드 개발
