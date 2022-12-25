---
title: Today I rigged
date: 15 August 2018
time: 1534291200
author: Garm
description: Okay this is what happened... Like many other games we need animations for our character so...
img: 20180730_182032.jpg
pageType: post
---

<style>
    .hidden {
        display: none;
    }
</style>
<script>
    function showHiddenStuff() {
    	    var btn = document.getElementById("button-for-hidden-stuff")
            var stuff = document.getElementById("hidden-stuff")
            
    		btn.className = "hidden"
    		stuff.className = ""
            
            stuff.scrollIntoView()
    }
</script>

Okay this is what happened...

Like many other games we need animations for our character so, I loaded up Blender and opened our rigged character (with automatic weights... _don't tell anyone_ 👀).

I had an idea, why animate if we can just grab some from Mixamo?  
We might want custom animation later but it should be good for now.  
Great, let's do it!

I typed "mixamo.com" into the address bar, found a sweet dancing animation and downloaded it.  
Which looks like 👇 for reference.
![it isn't as effect full without the image :(](/blog/today-i-rigged/0001-0098-ref.gif)  
Nothing fancy yet...

But it wasn't a great fit for our skeleton/rig.  
Alright let's just use the retarget tools in Blender's mocap add-on!  
Ok, something is off, doesn't look very good...

This is the point where the naive section of my brain kicks in and i think...

> I just need to constraint some world positions and rotations from the source to target.  
> It might need some offsets and tweaks but it'll be fine! -💩

I do it easy peasy! Ok, let's see it, <i>\*hits Alt + A\*</i>

![it isn't as effect full without the image :(](/blog/today-i-rigged/0001-0098.gif)

<!-- <table align="center" id="button-for-hidden-stuff" style="border: none; background: none; margin-bottom: 16px;">
    <tr style="border: none; background: none;">
        <th style="border: none; background: none;">
			<a href="javascript:showHiddenStuff()" style="content-align: center">Reveal</a>
        </th>
    </tr>
</table>
<div id="hidden-stuff" class="hidden">
    <img src="today-i-rigged/0001-0098.gif">
    <h1>
        Great, let's ship it!
    </h1>
</div> -->
