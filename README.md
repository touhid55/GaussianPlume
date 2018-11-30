# GaussianPlume
"GaussianPlume" is a project to visualize effect of toxic release in any area through Gaussian dispersion model.
The simulation is available at http://GaussianPlume.github.io/?wd=0/ws=10/Q=92.66/mw=17/sc=rf/lat=29.76/lon=-95.38 where
"wd" is wind direction, "ws" is wind speed, "Q" is amount of material released, "mw" is molecular weight, "sc" is stability class and "lat","lon" are latitude and longitude respectively.
One can vary the values of wd, ws, Q, mw, sc, lat and lon .


# Documentation

This is a very simple and effective tool to visualize Gaussian dispersion model. It takes the value of "Q" in "g/s" which is the release rate."wd" is wind direction in degree,"ws" is wind speed in "m/s"."mw" takes the value of Molecular Weight of released material.For example, 17.013 for ammonia."sc" is stabilty class which has values for both urban and rural conditions.We considered Pasquill-Gifford Dispersion Coefficient for Plume Dispersion. For "A" to "F" stabilty class in both urban and rural condition, the simulation takes the value of "sc" as ra,rb,rc,....upto rf or ua,ub,uc....upto uf.Finally, "lat" and "lon" take the values of Latitude and Longitude.

Assumptions:
The following assumptions were used to make the simulation.

1. Steady-state conditions, which imply that the rate of emission from the point source is constant.</br>
2. Wind speed is constant both in time and with height (wind direction shear is not considered).</br>
3. Mass is conserved through reflection at surfaces.</br>
4. The model should be applied for average wind speeds of more than 1 m/s (> 1 m/s).</br>
5. The terrain underlying the plume is flat.</br>





























# Inspiration
<a href="https://www.epa.gov/cameo/aloha-software" target="_blank">ALOHA(Areal Location of Hazardous Atmosphere)</a> and <a href="https://www.dnvgl.com/services/process-hazard-analysis-software-phast-1675" target='_blank'>PHAST(Process Hazard Analysis Software)</a> provided the main inspiration for this project

# References
1.CCPS(Center for Chemical Process Safety),2010,Guidelines for Chemical Process Quantitative Risk Analysis,A JOHN WILEY & SONS, INC., PUBUCATION, Chap. 2. ISBN:0-8169-0720-X </br>
2. Crowl D.A., and Louvar J.F., 2011, Chemical Process Safety, New Jersey: Prentice Hall, Chap. 4.
ISBN: 0-13-018176-5
