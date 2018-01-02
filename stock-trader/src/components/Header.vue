<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	  <router-link to="/" class="navbar-brand">Stock Trader</router-link>

	  <div class="collapse navbar-collapse">
	    <ul class="navbar-nav mr-auto">
	      <li class="nav-item">
	      	<router-link to="portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
	      	<router-link to="stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
	        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
	      </li>
	      <li class="nav-item dropdown">
	        <a 
	        	class="nav-link dropdown-toggle" 
	        	href="#" 
	        	id="navbarDropdown" 
	        	role="button" 
	        	data-toggle="dropdown" 
	        	aria-haspopup="true" 
	        	aria-expanded="false">
	         	Save & Load
	        </a>
	        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
	          <a class="dropdown-item" href="#">Save Data</a>
	          <a class="dropdown-item" href="#">Load Data</a>
	        </div>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="#">Link</a>
	      </li>
	      
	      <li class="nav-item">
	        <a class="nav-link disabled" href="#">Disabled</a>
	      </li>
	    </ul>
	  </div>
	</nav>
</template>

<template>
	<nav class="navbar navbar-default">
	  <div class="container-fluid">
	    <!-- Brand and toggle get grouped for better mobile display -->
	    <div class="navbar-header">
	      <router-link to="/" class="navbar-brand">Stock Trader</router-link>
	    </div>

	    <!-- Collect the nav links, forms, and other content for toggling -->
	    <div class="collapse navbar-collapse">
	      <ul class="nav navbar-nav">
	      	<router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
	      	<router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
	      </ul>
	      <ul class="nav navbar-nav navbar-right">
	        <li><a href="#">End Day</a></li>
	        <li class="dropdown">
	          <a 
	          		href="#" 
	          		class="dropdown-toggle" 
	          		data-toggle="dropdown" 
	          		role="button" 
	          		aria-haspopup="true" 
	          		aria-expanded="false">
	          		Save & Load <span class="caret"></span></a>
	          <ul class="dropdown-menu">
	            <li><a href="#">Save Data</a></li>
	            <li><a href="#">Load Data</a></li>
	          </ul>
	        </li>
	      </ul>
	    </div><!-- /.navbar-collapse -->
	  </div><!-- /.container-fluid -->
	</nav>
</template>