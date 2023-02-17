//轮播图
//获取按钮div
let where = 0;
let l_b = document.querySelector('.l_b');
let r_b = document.querySelector('.r_b');
//获取容器
let content = document.querySelector('.content');
//获取图片容器
let pictures = document.querySelector('.pictures');
//获取.p_s类中的所有div
let p_s_ps = document.querySelectorAll(".p_s_p");
//获取body
let body = document.querySelector('body');


//当页面加载完毕时开始play()函数
window.onload = play;


//为content添加鼠标移入事件
content.addEventListener('mouseover', function () {
    l_b.style.visibility = 'visible';//显示左按钮
    r_b.style.visibility = 'visible';//显示右按钮
})

//为content添加鼠标移出事件
content.addEventListener('mouseout', function () {
    l_b.style.visibility = 'hidden';//隐藏左按钮
    r_b.style.visibility = 'hidden';//隐藏右按钮
})



//为content添加鼠标移入事件移入时停止play()函数
content.addEventListener('mouseover', function () {
    clearInterval(timer);
})


//为l_b添加鼠标移入事件移入时改变背景颜色并暂停轮播
l_b.addEventListener('mouseover', function () {
    clearInterval(timer);
})

//为r_b添加鼠标移入事件移入时暂停轮播
r_b.addEventListener('mouseover', function () {
    clearInterval(timer);
})

//播放函数
function play() {
    timer = setInterval(function () {
        where++;
        if (where > 5) {
            where = 0;
        }
        pictures.style.left = -where * 762 + 'px';
    }, 2000);
    //设置小白点的定时器
    timer2 = setInterval(function () {
        //根据where的值设置小白点的样式
        for (let i = 0; i < p_s_ps.length; i++) {//遍历所有的小白点
            p_s_ps[i].classList.remove('active');//移除所有的小白点的active类
        }
        p_s_ps[where].classList.add('active');//给当前的小白点添加active类
    }, 2000);

}

//为content添加鼠标移出事件移出时继续轮播
content.addEventListener('mouseout', play)


// active = setInterval(function () {//设置定时器
//     if (where == 0) { p_s_ps[5].classList.remove('active'); }//如果是第一张图片，则将第六张图片的active类移除
//     p_s_ps[where].classList.add("active");//将当前图片的active类添加
//     p_s_ps[(where - 1) < 0 ? 6 : where - 1].classList.remove("active");//将当前图片的前一张图片的active类移除

// }, 2000);



let tthr = document.querySelector(".tthr");
//添加移入事件修改src
let rb_nav_last = document.querySelector('.rb_nav_last');//
rb_nav_last.addEventListener('mouseover', function () {
    tthr.src = './images/top2.png';
})
//添加移出事件修改src
rb_nav_last.addEventListener('mouseout', function () {
    tthr.src = './images/top1.png';
})



//设置点击事件点击时让图片移动且改变active类
for (let i = 0; i < p_s_ps.length; i++) {
    p_s_ps[i].onclick = function () {
        where = i;
        pictures.style.left = -where * 762 + 'px';//设置图片的left值
        p_s_ps[i].classList.add("active");//设置当前点击的div的class为active
        p_s_ps[(i - 1) < 0 ? 6 : i - 1].classList.remove("active");//设置上一个div的class为active
    }
}

//设置按钮点击时让图片移动且改变当前为where下标的active类
l_b.onclick = function () {
    where--;
    if (where < 0) {
        where = 5;
    }
    pictures.style.left = -where * 762 + 'px';//设置图片的left值
    p_s_ps[where].classList.add("active");
    p_s_ps[(where + 1) > 5 ? 0 : where + 1].classList.remove("active");
}

r_b.onclick = function () {
    where++;
    if (where > 5) {
        where = 0;
    }
    pictures.style.left = -where * 762 + 'px';
    p_s_ps[where].classList.add("active");
    p_s_ps[(where - 1) < 0 ? 6 : where - 1].classList.remove("active");
}




back_to_top = document.querySelector(".rb_nav_last");//获取返回顶部容器
//页面处于顶部时不显示返回顶部按钮
window.onscroll = function () {
    if (document.documentElement.scrollTop > 0) {
        back_to_top.style.display = 'block';
    } else {
        back_to_top.style.display = 'none';
    }
}


//课程小三角翻转
course = document.querySelector(".course");
arrow = document.querySelector(".arrow");
//添加鼠标移入事件
course.addEventListener('mouseover', function () {
    //翻转180度
    arrow.style.transform = 'rotate(180deg)';
})
//添加鼠标移出事件
course.addEventListener('mouseout', function () {
    //翻转180度
    arrow.style.transform = 'rotate(0deg)';
})




//计算机分类
//获取所有的span容器
change = document.querySelectorAll(".change");
//设置鼠标移入事件
for (let i = 0; i < change.length; i++) {
    change[i].onmouseover = function () {
        //添加changed类
        change[i].classList.add("changed");
        //清除其他span的changed类
        for (let j = 0; j < change.length; j++) {
            if (i != j) {
                change[j].classList.remove("changed");
            }
        }
    }
}

//底部二维码
//获取二维码容器
wxgzh = document.querySelector(".ewm");
//获取二维码图标容器
wx = document.querySelector(".wx");
//设置鼠标移入事件
wx.onmouseover = function () {
    //显示
    wxgzh.style.display = 'flex';
}
//设置鼠标移出事件
wx.onmouseout = function () {
    //隐藏
    wxgzh.style.display = 'none';
}
