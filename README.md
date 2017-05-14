# doorithon-v2-unmo
Doorithon ver2.0  Unmo Websit
### 모임시간 계산 어플리케이션  - unmo 소개

다수의 인원이 모일 수 있는 시간을 보다 쉽고 편리하게 찾아주는 어플리케이션

### unmo 기획 과정

#### 초기 단계

- 켈린더를 연동하여 시간을 비교하여 잉여 시간을 도출하는 방법
- 타임테이블을 사용하여 만날 수 있는 시간을 도출
- 데이터 베이스로 에브리타임 친구들의 시간표를 관리한다.

#### 중기 기획

- 팀명 선정 : 언모? ( 언제 모일래? )
- 모임 시간을 도출해주는 웹 서비스
- 사용자 지정 : 제작 방향 설정 위해서 대학생으로 한정함.
- 사용자에 따른 연동 프로그램을 에브리타임으로 설정
- 시간의 한계에 따른 추가기능은 제외함.
- 친구목록 / 친구추가 / 아이디 검색으로 친구들의 시간을 불러올 수 있도록 한다.
- 기획 의도에 맞춰서 위치보다는 시간을 정리하는 방향으로 잡음
- front page - Github pages 로 배포 / Backend server - Python Flask / 연동 웹: everytime
- Json list로 필요한 정보들만 파싱하여 사용한다.

#### 기획 마무리

- 중기 기획 대부분 반영 결정
- 에브리 타임 아이디를 반영하는 로그인 화면
- 그룹원 추가 
  - 친구추가는 사용자가 에브리 타임에서 직접 추가하는 걸로 함.
  - 그룹 설정 및 그룹원 추가만 웹 서비스로 함.
- 최종 시간표 출력

### unmo 구현
 1. 에브리 타임 사용자 데이터를 이용해 사용자의 친구들 시간표를 비교한다.
 2. Front-end에서는 원하는 사용자만 지정하여 빈 시간을 찾도록 해준다.
 3. back-end에서는 시간표 값을 필터링 하여 값을 Front 로 넘겨 준다.
### unmo Library License

#### back-end

- BeautifulSoup, bs4 - MIT open source
- requests - Apache 2.0
- flask - [BSD](http://flask.pocoo.org/docs/0.12/license/)

#### front-end

- bootstrap - MIT open source
- jquery - Apache 2.0
- Schedule Template - CodyHouse. By [Amber Creative](http://ambercreative.co/).

### 3조 unmo 팀 구성원

임이현 국민대학교 [@ehyeonni](https://github.com/ehyeonni)

오윤재 국민대학교 [@OhYounjae](https://github.com/OhYounjae)

홍승의 국민대학교 [@zaeval](https://github.com/zaeval)

김동언 국민대학교 [@kde713](https://github.com/kde713)

정선욱 한양대학교 [@PineApple777](https://github.com/PineApple777)