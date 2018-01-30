#!/usr/bin/env node

const fs = require('fs');
const md = require('./../lib/md.js');
const inquirer = require('inquirer');
const open = require('open');

let question = {
    type: 'list',
    name: 'md',
    message: '你想阅读哪个markdown文件？',
    choices: [],
    filter: function(val) {
      return val.toLowerCase();
    }
};


fs.readdir(process.cwd(),function(err,files){
    if(err){
        return console.error(err);
    }

    //筛选出md文件
    let mds = [];
    for(let i of files){
        if(i.slice(-3)===".md"){
            mds.push(i);
        };
    }
    if(mds.length === 0){
        console.log("当前目录没有markdown文件哦 ╮(╯▽╰)╭");
    }else{
        question.choices = mds;
        inquirer.prompt(question).then(answers => {
          console.log('正在生成 > '+answers.md.slice(0,-3)+ '.html');
          md.writeMd(answers.md);
          console.log("正在打开浏览器······");
          open(process.cwd()+"/"+answers.md.slice(0,-3)+ '.html',"chrome");

          //10秒后删除HTML文件
          setTimeout(function(){
              fs.unlinkSync(answers.md.slice(0,-3)+ '.html');
          },1000*10)
        });
    }



    //md.writeMd("前端问题总结.md");
})
