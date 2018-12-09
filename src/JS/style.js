/*$('.input-number-increment').click(function() {
  var $input = $(this).parents('.input-number-group').find('.input-number');
  var val = parseInt($input.val(), 10);
  $input.val(val + 1);
});

$('.input-number-decrement').click(function() {
  var $input = $(this).parents('.input-number-group').find('.input-number');
  var val = parseInt($input.val(), 10);
  $input.val(val - 1);
});

*/

function dropdownFunction() {
  document.getElementById("dropdown1").classList.toggle("show");
}

$(document).ready(function(){

  $(".dropdown-trigger").dropdown();

  var vue_course_item = new Vue({
    el: '#course_item',
    data: {
      course_with_comment: [],
      course_data: [],
      heartColor: false,
      comment_only: false,
      course_by_department: [],
    },
    created: function() {
      $.ajax({
        type: "GET",
        url: "https://nckuhub.com/course/allcourse",
        success: function(response) {
              vue_course_item.course_data = response.nowCourse;
              vue_course_item.course_by_department = response.courses_Department;
              console.log(vue_course_item.course_by_department);
              // for(i in vue_course_item.course_data) {
              //   if(vue_course_item.course_data[i].comment_num > 0){
              //     vue_course_item.course_with_comment.push(vue_course_item.course_data[i]);
              //   }
              // }

        }
      });
    },
    computed: {
      // filterComment: function() {
      //   if(this.comment_only == true) {
      //     return this.course_data.filter( function(comment) {
      //       return comment.comment_num > 0;
      //     });
      //   } else {
      //     return this.course_data.filter( function(comment) {
      //       return comment.comment_num >= 0;
      //     });
      //   }
      // }
    },
    methods: {
      courseLink: function(index) {
        vue_courseContent.isShow = true;
        // vue_courseContent.course_data = course_data[index];
      },

      addCourse: function(index){
        var chooseCourse = vue_course_item.course_data[index];
        vue_wishList.wishList.push(chooseCourse);
      },
      commentfilter: function() {
        // var filt_data = this.course_data.filter(function(item){
        //   return item.系號 == "I6";
        // });
        // vue_courseContent.course_data = filt_data;
        // console.log(vue_courseContent.course_data);
        var cCheck = document.getElementById("commentCheck");
        if(cCheck.checked == true) {
          this.comment_only = true;
        } else {
          this.comment_only = false;
          console.log(this.comment_only);
        }
      }
    },
  })

  var vue_courseContent = new Vue ({
    el: '#courseContent',
    data: {
      isShow: false,
      course_data: vue_course_item.course_data,
    },
    methods: {
      showContent: function() {
        vue_courseContent.isShow = false;
      }
    }
  })


  var vue_wishList = new Vue ({
    el: '#wishList',
    data: {
      wishList: [],
    }
  })

  var vue_courseComment = new Vue ({
    el: "#courseArrange",
    data: {
      course_data: [],
    },
    methods: {
      cfilter: function() {
        var cCheck = document.getElementById("commentCheck");
        if(cCheck.checked == true) {
          vue_course_item.comment_only = true;
        } else {
          vue_course_item.comment_only = false;
          console.log(vue_course_item.comment_only);
        }
      },
      sortByDept: function() {
        // vue_course_item.course_data.sort(function(a,b) {
        //   return a.系號[0] > b.系號[0];
        // });
        //
        // var sorted_data = {};
        //
        // for(i in vue_course_item.course_data) {
        //   var s = vue_course_item.course_data[i].系號[0];
        //   if (sorted_data[s] && sorted_data[s].length >= 0) {
        //       sorted_data[s].push(vue_course_item.course_data[i]);
        //   } else {
        //     sorted_data[s] = [];
        //     sorted_data[s].push(vue_course_item.course_data[i]);
        //   }
        // }
        // console.log(sorted_data);
        vue_course_item.course_data = {};
        vue_course_item.course_data = vue_course_item.course_by_department.A1;
        console.log(vue_course_item.course_data);
      }
    },
  })




});
