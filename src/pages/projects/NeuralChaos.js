import React from 'react';
import Main from '../../layouts/Main';

/** Use header for title
 * add buttons to link to each section (like on resume page)
 * graphs/animations (animation showing chaos appear as period decreases(?))
 */

const NeuralChaos = () => (
  <Main
    title="Neural Chaos"
    description="An exploration of chaotic behavior in neuronal models using the FitzHugh-Nagumo framework"
  >
    <article className="post" id="neural-chaos">
      <div className="title">
        <h1>Neural Chaos</h1>
        <p>
          Originally created for MATH 431: Mathematical Biology in collaboration with
          Nev Ahrendsen, Jenna Ramsey-Rutledge, and Kyle Sperber.
        </p>
      </div>

      <section>
        <h2>Abstract</h2>
        <p>
          Neurons play a fundamental role in transmitting electrical and chemical signals
          in the nervous system. This project investigates the chaotic behavior exhibited
          by neurons under varying input currents using the FitzHugh-Nagumo model.
          We explored phase plots, stability analysis, and the cascading effects of chaos
          in networks of neurons.
        </p>
      </section>

      <section>
        <h2>Biological Background</h2>
        <p>
          Neurons act as electrical capacitors that store charge until a threshold is
          reached, causing the release of stored charge. This phenomenon, called an
          action potential, propagates signals across neurons. Our model simplifies
          this dynamic using the FitzHugh-Nagumo equations to capture essential
          features of neuronal behavior.
        </p>
      </section>

      <section>
        <h2>Mathematical Model</h2>
        <p>
          The FitzHugh-Nagumo model is a 2D simplification of the Hodgkin-Huxley
          equations, focusing on voltage dynamics and recovery variables:
        </p>
        <pre>
          du/dt = v - (u^3 / 3) - w + I(t)
          dw/dt = epsilon * (u + a - b * w)
        </pre>
        <p>
          Key parameters include <code>ε</code>, <code>α</code>, and <code>γ</code>,
          which were tuned to match observed neuronal behavior.
        </p>
      </section>

      <section>
        <h2>Chaos and Stability</h2>
        <p>
          Using constant and time-dependent input currents, we analyzed equilibrium points,
          limit cycles, and the onset of chaotic dynamics. Our phase plane analysis revealed
          a Hopf bifurcation leading to oscillatory behavior. Introducing square wave inputs
          demonstrated chaotic trajectories under specific conditions.
        </p>
      </section>

      <section>
        <h2>Interactive Features</h2>
        <p>
          Explore the dynamics of our model through the interactive visualizations below:
        </p>
        <ul>
          <li>
            <strong>Phase Plots:</strong> Visualize the stability of equilibrium points
            and the emergence of limit cycles.
          </li>
          <li>
            <strong>Chaos Simulation:</strong> Experiment with varying square wave
            periods to observe chaotic transitions.
          </li>
          <li>
            <strong>Neuron Network:</strong> Analyze how chaos propagates through a
            chain of connected neurons.
          </li>
        </ul>
        {/* Placeholder for interactive components */}
        <div className="interactive">
          {/* Example: Include dynamic graphing library components */}
          <p>[Interactive phase plot goes here]</p>
          <p>[Chaos simulation graph goes here]</p>
        </div>
      </section>

      <section>
        <h2>Conclusions</h2>
        <p>
          The FitzHugh-Nagumo model effectively demonstrates chaotic neuronal dynamics
          under time-dependent inputs. Coupling neurons into a network reveals their
          ability to filter and stabilize chaotic inputs, offering insights into brain
          function and potential links to neurological disorders.
        </p>
      </section>

      <section>
        <h2>Future Work</h2>
        <p>
          Future research includes exploring more complex neuron networks and using the
          full Hodgkin-Huxley model to validate the observed chaos smoothing phenomena.
        </p>
      </section>
    </article>
  </Main>
);

export default NeuralChaos;
