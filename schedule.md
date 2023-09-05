---
title: Schedule
permalink: /schedule/
layout: posts-page
---

## Principal Investigator

<iframe src="https://calendar.google.com/calendar/u/0/embed?src=dale40@gmail.com&ctz=Asia/Seoul&pli=1" class="embed-responsive" height="600px"></iframe>

## Group

<iframe src="https://calendar.google.com/calendar/u/0/embed?src=cc3381e63109ca3620f9dc700200331094a[…]8bfe3ea4b99f846d68@group.calendar.google.com&ctz=Asia/Seoul" class="embed-responsive" height="600px"></iframe>

## Conferences

[ConfSearch.ethz.ch](https://confsearch.ethz.ch/?query=HPCA+HPDC+SC+IPDPS+ASPLOS+SBAC-PAD+DAC+ISCA+MICRO+CLOUD+PACT+ICS+FPGA+CF+DATE+DSN&sortby=deadline)

<!--
<table>
  <tr>
    <th> Month </th>
    <th> Conference </th>
    <th> Paper Deadline </th>
    <th> Location </th>
    <th> Tags </th>
  </tr>
  {% assign months = "January February March April May June July August September October November December" | split: " " %}
  {% for month in months %}
    {% for conference in site.data.conferences %}
      {% assign conf = conference[1] %}
      {% assign deadline = conf.series[0].deadline | split: "-" %}
      {% if deadline[0] == month %}
  <tr>
    <td> {{ month }} </td>
    <td> {{ conf.title }} </td>
    <td> {{ conf.series[0].deadline }} ({{ conf.series[1].deadline }}) </td>
    <td> {{ conf.series[0].location }} </td>
    <td> {{ conf.tags }} </td>
  </tr>
      {% endif %}
    {% endfor %}
  {% endfor %}
</table>
//-->
