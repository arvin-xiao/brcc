(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-872ae574"],{7384:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-card",{attrs:{bordered:!1}},[n("section",{staticClass:"content"},[n("a-table",{attrs:{columns:t.columns,"data-source":t.tableData,pagination:t.pagination,"row-key":function(t){return t.id},scroll:{x:1700}},on:{change:t.handleTableChange},scopedSlots:t._u([t._l(["name","val"],(function(e){return{key:e,fn:function(a,r){return[n("div",{key:e},[r.editable?n("a-input",{staticStyle:{margin:"-5px 0"},attrs:{value:a},on:{change:function(n){return t.handleChange(n.target.value,e)}}}):[n("span",{staticStyle:{"white-space":"break-spaces"}},[t._v(t._s(a))])]],2)]}}})),{key:"operation",fn:function(e,a,r){return[n("div",{staticClass:"editable-row-operations"},[a.editable?n("span",[n("a",{on:{click:function(){return t.save(a,r)}}},[t._v(t._s(t.$t("config.table.operation.save")))]),n("a-divider",{attrs:{type:"vertical"}}),n("a-popconfirm",{attrs:{title:t.$t("config.table.operation.cancel.tips")},on:{confirm:function(){return t.cancel(a.name,r)}}},[n("a",[t._v(t._s(t.$t("config.table.operation.cancel")))])])],1):n("span",[n("a",{on:{click:function(){return t.edit(a,r)}}},[t._v(t._s(t.$t("config.table.operation.edit")))]),n("a-divider",{attrs:{type:"vertical"}}),n("a-popconfirm",{attrs:{title:t.$t("config.table.operation.delete.tips")},on:{confirm:function(e){return t.handleDelete(a)}}},[n("a",{attrs:{href:"javascript:;",type:"primary"}},[t._v(" "+t._s(t.$t("config.table.operation.delete"))+" ")])])],1)])]}},{key:"groupName",fn:function(e,a){return[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.routeGroup(a)}}},[t._v(t._s(a.groupName))])]}},{key:"versionName",fn:function(e,a){return[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.routeVersion(a)}}},[t._v(t._s(a.versionName))])]}},{key:"environmentName",fn:function(e,a){return[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.routeEnv(a)}}},[t._v(t._s(a.environmentName))])]}},{key:"projectName",fn:function(e,a){return[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.routeProject(a)}}},[t._v(t._s(a.projectName))])]}},{key:"productName",fn:function(e,a){return[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.routeProduct(a)}}},[t._v(t._s(a.productName))])]}}],null,!0)},[t._l(t.columns,(function(e,a){return n("template",{slot:e.scopedSlots.title},[n("span",{key:a},[t._v(t._s(t.$t(e.scopedSlots.title)))])])}))],2)],1)])},r=[],o=(n("7f7f"),n("75fc")),i=(n("96cf"),n("3b8d")),c=[{dataIndex:"productName",scopedSlots:{title:"configlist.table.columns.product",customRender:"productName"}},{dataIndex:"projectName",scopedSlots:{title:"configlist.table.columns.project",customRender:"projectName"}},{dataIndex:"environmentName",scopedSlots:{title:"configlist.table.columns.env",customRender:"environmentName"}},{dataIndex:"versionName",scopedSlots:{title:"configlist.table.columns.version",customRender:"versionName"}},{dataIndex:"groupName",scopedSlots:{title:"configlist.table.columns.group",customRender:"groupName"}},{dataIndex:"name",scopedSlots:{title:"config.table.columns.name",customRender:"name"}},{dataIndex:"val",scopedSlots:{title:"config.table.columns.value",customRender:"val"}},{dataIndex:"operation",fixed:"right",width:150,scopedSlots:{title:"config.table.columns.operation",customRender:"operation"}}],s={data:function(){return{columns:c,pagination:{total:0,current:1,pageSize:10,sortBy:"id desc",hideOnSinglePage:!0,showTotal:function(t,e){return"显示 ".concat(e[0]," ~ ").concat(e[1]," 条记录，共 ").concat(t," 条记录")}},options:[],itemData:[],tableData:[],target:{name:"",val:""}}},created:function(){this.getAllList()},methods:{getAllList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$api.config.getItemQuery({key:this.$route.query.key||"",val:this.$route.query.val||"",pageNo:this.pagination.current,pageSize:this.pagination.pageSize}).then((function(t){e.tableData=t.data.dataList,e.pagination.total=t.data.total}));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleTableChange:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.pagination.pageSize=e.pageSize,this.pagination.current=e.current,t.next=4,this.getAllList();case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleDelete:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$api.config.deleteConfig(e.id).then((function(t){0===t.status&&(n.$message.success("success"),n.getAllList())}));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleChange:function(t,e){this.target[e]=t},routerToIndex:function(){this.$router.push("/index")},edit:function(t,e){var n=Object(o["a"])(this.tableData);n[e].editable=!0,this.tableData=n,this.target={name:t.name,val:t.val}},save:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,n){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$api.config.addConfig({id:e.id,name:this.target.name,val:this.target.val,groupId:e.groupId,groupName:e.groupName,versionId:e.versionId,versionName:e.versionName}).then((function(t){0===t.status&&(a.$message.success("success"),a.getAllList())}));case 1:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),cancel:function(t,e){var n=Object(o["a"])(this.tableData);n[e].editable=!1,this.getAllList()},routeProduct:function(t){this.$router.push({path:"/project",query:{productId:t.productId}}),this.addLocalStorage(t)},routeGroup:function(t){this.$router.push({path:"/configitem",query:{groupId:t.groupId}}),this.addLocalStorage(t)},routeVersion:function(t){this.$router.push({path:"/group",query:{versionId:t.versionId}}),this.addLocalStorage(t)},routeEnv:function(t){this.$router.push({path:"/version",query:{environmentId:t.environmentId}}),this.addLocalStorage(t)},routeProject:function(t){this.$router.push({path:"/env",query:{projectId:t.projectId}}),this.addLocalStorage(t)},addLocalStorage:function(t){this.$store.dispatch("setRccInfo",{productId:t.productId,productName:t.productName,projectId:t.projectId,projectName:t.projectName,environmentId:t.environmentId,environmentName:t.environmentName,versionId:t.versionId,versionName:t.versionName,groupId:t.groupId,groupName:t.groupName})}}},u=s,l=n("2877"),d=Object(l["a"])(u,a,r,!1,null,null,null);e["default"]=d.exports},"75fc":function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var a=n("a745"),r=n.n(a),o=n("db2a");function i(t){if(r()(t))return Object(o["a"])(t)}var c=n("67bb"),s=n.n(c),u=n("5d58"),l=n.n(u),d=n("774e"),p=n.n(d);function f(t){if("undefined"!==typeof s.a&&null!=t[l.a]||null!=t["@@iterator"])return p()(t)}var m=n("e630");function h(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(t){return i(t)||f(t)||Object(m["a"])(t)||h()}}}]);