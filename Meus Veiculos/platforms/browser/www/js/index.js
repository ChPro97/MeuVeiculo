/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
// Navbar
const elemsDropdown = document.querySelectorAll(".dropdown-trigger");
const instancesDropdown = M.Dropdown.init(elemsDropdown, {
    coverTrigger: false
});
const elemsSidenav = document.querySelectorAll(".sidenav");
const instancesSidenav = M.Sidenav.init(elemsSidenav, {
    edge: "left"
});
const elemsDropdown1 = document.querySelectorAll(".dropdown-trigger1");
const instancesDropdown1 = M.Dropdown.init(elemsDropdown1, {
    coverTrigger: false
});
const elemsDropdowng = document.querySelectorAll(".dropdown-triggerg");
const instancesDropdowng = M.Dropdown.init(elemsDropdowng, {
    coverTrigger: false
});
const elemsDropdowng1 = document.querySelectorAll(".dropdown-triggerg1");
const instancesDropdowng1 = M.Dropdown.init(elemsDropdowng1, {
    coverTrigger: false
});
const elemsDropdownc = document.querySelectorAll(".dropdown-triggerc");
const instancesDropdownc = M.Dropdown.init(elemsDropdownc, {
    coverTrigger: false
});
const elemsDropdownc1 = document.querySelectorAll(".dropdown-triggerc1");
const instancesDropdownc1 = M.Dropdown.init(elemsDropdownc1, {
    coverTrigger: false
});
const elemsDropdowni = document.querySelectorAll(".dropdown-triggeri");
const instancesDropdowni = M.Dropdown.init(elemsDropdowni, {
    coverTrigger: false
});
const elemsDropdowni1 = document.querySelectorAll(".dropdown-triggeri1");
const instancesDropdowni1 = M.Dropdown.init(elemsDropdowni1, {
    coverTrigger: false
});

app.initialize();