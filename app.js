
const menu=document.querySelector('.menu'),links=document.querySelector('.navlinks');
if(menu)menu.addEventListener('click',()=>{links.classList.toggle('open');menu.setAttribute('aria-expanded',links.classList.contains('open'))});
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
const demo=document.querySelector('#demo-run');
if(demo)demo.addEventListener('click',()=>{
const task=document.querySelector('#demo-task').value.trim(),output=document.querySelector('#demo-output');
if(!task){output.textContent='> Enter a task to preview the workflow.';return}
const safe=task.replace(/[<>]/g,'');
output.textContent='> TASK RECEIVED: '+safe+'\n> MODE: LOCAL DEMONSTRATION\n\n[1/4] Parse user intent ✓\n[2/4] Draft a task plan ✓\n[3/4] Identify tools / permissions ✓\n[4/4] Await real agent integration\n\nDemo complete. No external tools were run and no AI API was called.';
});
const form=document.querySelector('#contact-form');
if(form)form.addEventListener('submit',e=>{
e.preventDefault();
const data=new FormData(form);
const subject=encodeURIComponent('AETHON inquiry: '+data.get('topic'));
const body=encodeURIComponent('Name: '+data.get('name')+'\n\n'+data.get('message'));
document.querySelector('#form-result').textContent='Opening your email application. No message is stored on this site.';
window.location.href='mailto:?subject='+subject+'&body='+body;
});
