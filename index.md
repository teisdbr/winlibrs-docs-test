---
title: LIBRS Documentation Home Page
layout: default
permalink: /
---

# LIBRS Validation and Processing Documentation
____

#### This page contains information on how LIBRS Flat Files should be processed and generated for use in submitting data to the State of Louisiana, and subsequently the FBI via NIBRS. 

#### Use the links below, or the side menu to get started. This site contains the following information:

___


- ### <a href="./librs-spec">Technical Specification Documentation</a>
  - #### Information about the specifications of each of the LIBRS Segments, how they're constructed, error messages associated with them, examples, and other requirements.
- ### <a href="./data-element-values">Data Element Available Values</a>
  - #### Table of all of the available values that can be entered for each LIBRS Data Element.
- ### <a href="./data-element-definitions">Data Element Definitions</a>
  - #### In depth information about each of the LIBRS Data Elements, as well as error messages, examples, and other requirements that are associated with them.
- ### <a href="./lrs-master-list">Master LIBRS LRS List</a>
  - #### The master list of all Louisiana Revisec Statute (LRS) Codes that the LIBRS Program currently accepts, as well as information about expired LRS Codes. 
  - #### Links are available for vendors and agencies to download a JSON list of the current Master LIBRS LRS List for ingestion into their RMS.
- ### <a href="./mandatories">LIBRS/NIBRS Mandatories</a>
  - #### Groupings of multiple LIBRS Data Elements and their required values when certain Data Elements are present with particular NIBRS Submissions. 

___

## Recent Changes
___

2020-02-28
* Found multiple Mandatories that were throwing an Error Code 10077 when they should have been throwing particular Error Codes based on the Mandatory. The Mandatories were: 1, 5, 6, 9, 17, and 20. Changes to LIBRS and Validator were deployed; no changes to documentation were required. 

2020-02-21
* Changelog started. Please Contact the LIBRS Administrator if you would like to be notified of changes to the LIBRS Spec and Documentation on a weekly basis. 

___

<br>

#### More information about the LIBRS Program and its requirements can be found at <a href="http://www.crimeinla.org">http://www.crimeinla.org</a>
