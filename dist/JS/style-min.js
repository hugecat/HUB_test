function dropdownFunction(){document.getElementById("dropdown1").classList.toggle("show")}$(document).ready(function(){$(".dropdown-trigger").dropdown();var e=new Vue({el:"#course_item",data:{course_with_comment:[],course_data:[],heartColor:!1,comment_only:!1,course_by_department:[]},created:function(){$.ajax({type:"GET",url:"https://nckuhub.com/course/allcourse",success:function(o){e.course_data=o.nowCourse,e.course_by_department=o.courses_Department,console.log(e.course_by_department)}})},computed:{},methods:{courseLink:function(e){o.isShow=!0},addCourse:function(o){var n=e.course_data[o];t.wishList.push(n)},commentfilter:function(){1==document.getElementById("commentCheck").checked?this.comment_only=!0:(this.comment_only=!1,console.log(this.comment_only))}}}),o=new Vue({el:"#courseContent",data:{isShow:!1,course_data:e.course_data},methods:{showContent:function(){o.isShow=!1}}}),t=new Vue({el:"#wishList",data:{wishList:[]}});new Vue({el:"#courseArrange",data:{course_data:[]},methods:{cfilter:function(){1==document.getElementById("commentCheck").checked?e.comment_only=!0:(e.comment_only=!1,console.log(e.comment_only))},sortByDept:function(){e.course_data={},e.course_data=e.course_by_department.A1,console.log(e.course_data)}}})});