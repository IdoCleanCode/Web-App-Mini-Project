// 스톱워치의 시작 시간, 종료 시간, 실행 상태, 경과 시간을 저장하는 변수
let startTime, endTime, running, duration = 0;

// HTML 요소를 참조하는 변수
const timer = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

// 스톱워치를 시작하는 함수
function start() {
    // 이미 실행 중이면 아무 동작도 하지 않음
    if (running) return;

    // 스톱워치를 실행 상태로 변경
    running = true;

    // 시작 시간을 현재 시간으로 설정
    startTime = new Date();

    // 1초마다 updateTime 함수를 실행
    setInterval(updateTime, 1000);
}

// 스톱워치를 멈추는 함수
function stop() {
    // 실행 중이 아니면 아무 동작도 하지 않음
    if (!running) return;

    // 스톱워치를 중지 상태로 변경
    running = false;

    // 종료 시간을 현재 시간으로 설정
    endTime = new Date();

    // 시작 시간부터 종료 시간까지의 시간을 초 단위로 계산하여 경과 시간에 더함
    const seconds = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
    duration += seconds;
}

// 스톱워치를 리셋하는 함수
function reset() {
    // 스톱워치를 중지 상태로 변경
    running = false;

    // 경과 시간을 0으로 설정
    duration = 0;

    // 타이머 텍스트를 '00:00:00'으로 설정
    timer.textContent = '00:00:00';
}

// 타이머를 업데이트하는 함수
function updateTime() {
    // 실행 중이 아니면 아무 동작도 하지 않음
    if (!running) return;

    // 현재 시간을 가져옴
    const now = new Date();

    // 시작 시간부터 현재 시간까지의 시간을 초 단위로 계산하고, 경과 시간을 더함
    const seconds = Math.floor((now.getTime() - startTime.getTime()) / 1000) + duration;

    // 시간, 분, 초로 변환
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsDisplay = seconds % 60;

    // 타이머 텍스트를 업데이트
    timer.textContent = `${pad(hours)}:${pad(minutes)}:${pad(secondsDisplay)}`;
}

// 숫자를 2자리 문자열로 변환하는 함수 (예: 9 -> '09')
function pad(number) {
    return number < 10 ? '0' + number : number;
}

// 시작, 멈춤, 리셋 버튼에 이벤트 리스너를 추가
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
