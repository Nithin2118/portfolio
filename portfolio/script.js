/* ============================================
   AI/Neural Network Portfolio - JavaScript
   ============================================ */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize each feature with error handling
    try { initNeuralNetwork(); } catch (e) { console.error('Neural network error:', e); }
    // Bitmoji removed - using profile photo instead
    try { initNavigation(); } catch (e) { console.error('Navigation error:', e); }
    try { initNameTypingEffect(); } catch (e) { console.error('Name typing error:', e); }
    try { initTypingEffect(); } catch (e) { console.error('Typing effect error:', e); }
    try { initScrollAnimations(); } catch (e) { console.error('Scroll animations error:', e); }
    try { initCounterAnimation(); } catch (e) { console.error('Counter error:', e); }
    try { initSkillAnimations(); } catch (e) { console.error('Skill animations error:', e); }
    try { initMobileMenu(); } catch (e) { console.error('Mobile menu error:', e); }
    try { initSmoothScroll(); } catch (e) { console.error('Smooth scroll error:', e); }
});

/* ============================================
   Three.js Bitmoji Character
   ============================================ */
function initBitmojiCharacter() {
    const canvas = document.getElementById('bitmoji-canvas');
    if (!canvas) return;

    try {

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true
        });

        renderer.setSize(280, 280);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);

        // Character group
        const character = new THREE.Group();

        // Colors - Professional Look
        const skinColor = 0xf5d0b5;      // Fair skin tone
        const hairColor = 0x5c4033;      // Brown hair
        const suitColor = 0x4a4a4a;      // Grey suit
        const shirtColor = 0xe8f4f8;     // Light blue shirt
        const tieColor = 0xd4652f;       // Orange tie
        const tieStripe = 0x8b4513;      // Tie stripe
        const pantsColor = 0x8b7355;     // Brown pants

        // Head
        const headGeometry = new THREE.SphereGeometry(1.0, 32, 32);
        const headMaterial = new THREE.MeshLambertMaterial({ color: skinColor });
        const head = new THREE.Mesh(headGeometry, headMaterial);
        head.position.y = 2.0;
        character.add(head);

        // Hair - neat brown style
        const hairGeometry = new THREE.SphereGeometry(1.05, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5);
        const hairMaterial = new THREE.MeshLambertMaterial({ color: hairColor });
        const hair = new THREE.Mesh(hairGeometry, hairMaterial);
        hair.position.y = 2.15;
        character.add(hair);

        // Hair side part (styled)
        const hairSideGeometry = new THREE.SphereGeometry(0.3, 16, 16);
        const hairSide = new THREE.Mesh(hairSideGeometry, hairMaterial);
        hairSide.position.set(-0.7, 2.6, 0.3);
        hairSide.scale.set(1.5, 0.8, 1);
        character.add(hairSide);

        // Ears
        const earGeometry = new THREE.SphereGeometry(0.18, 16, 16);
        const earMaterial = new THREE.MeshLambertMaterial({ color: skinColor });
        const leftEar = new THREE.Mesh(earGeometry, earMaterial);
        leftEar.position.set(-1.0, 2.0, 0);
        leftEar.scale.set(0.5, 1, 0.8);
        character.add(leftEar);
        const rightEar = new THREE.Mesh(earGeometry, earMaterial);
        rightEar.position.set(1.0, 2.0, 0);
        rightEar.scale.set(0.5, 1, 0.8);
        character.add(rightEar);

        // Eyes
        const eyeGeometry = new THREE.SphereGeometry(0.15, 16, 16);
        const eyeWhiteMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
        const eyePupilMaterial = new THREE.MeshLambertMaterial({ color: 0x3d2314 });

        // Left eye white
        const leftEyeWhite = new THREE.Mesh(eyeGeometry, eyeWhiteMaterial);
        leftEyeWhite.position.set(-0.35, 2.05, 0.85);
        leftEyeWhite.scale.set(1.2, 1.1, 0.6);
        character.add(leftEyeWhite);

        // Left pupil
        const leftPupil = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), eyePupilMaterial);
        leftPupil.position.set(-0.35, 2.05, 0.98);
        character.add(leftPupil);

        // Left eye shine
        const eyeShineMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const leftShine = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 8), eyeShineMaterial);
        leftShine.position.set(-0.32, 2.08, 1.0);
        character.add(leftShine);

        // Right eye white
        const rightEyeWhite = new THREE.Mesh(eyeGeometry, eyeWhiteMaterial);
        rightEyeWhite.position.set(0.35, 2.05, 0.85);
        rightEyeWhite.scale.set(1.2, 1.1, 0.6);
        character.add(rightEyeWhite);

        // Right pupil
        const rightPupil = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), eyePupilMaterial);
        rightPupil.position.set(0.35, 2.05, 0.98);
        character.add(rightPupil);

        // Right eye shine
        const rightShine = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 8), eyeShineMaterial);
        rightShine.position.set(0.38, 2.08, 1.0);
        character.add(rightShine);

        // Rectangular Glasses (professional style)
        const glassesMaterial = new THREE.MeshLambertMaterial({ color: 0x1a1a1a });
        const lensGlassMaterial = new THREE.MeshBasicMaterial({
            color: 0xadd8e6,
            transparent: true,
            opacity: 0.2
        });

        // Left lens frame (rectangular)
        const frameThickness = 0.04;
        const frameWidth = 0.45;
        const frameHeight = 0.3;

        // Left frame top
        const leftFrameTop = new THREE.Mesh(new THREE.BoxGeometry(frameWidth, frameThickness, frameThickness), glassesMaterial);
        leftFrameTop.position.set(-0.35, 2.2, 1.0);
        character.add(leftFrameTop);
        // Left frame bottom
        const leftFrameBottom = new THREE.Mesh(new THREE.BoxGeometry(frameWidth, frameThickness, frameThickness), glassesMaterial);
        leftFrameBottom.position.set(-0.35, 1.92, 1.0);
        character.add(leftFrameBottom);
        // Left frame left
        const leftFrameLeft = new THREE.Mesh(new THREE.BoxGeometry(frameThickness, frameHeight, frameThickness), glassesMaterial);
        leftFrameLeft.position.set(-0.56, 2.06, 1.0);
        character.add(leftFrameLeft);
        // Left frame right
        const leftFrameRight = new THREE.Mesh(new THREE.BoxGeometry(frameThickness, frameHeight, frameThickness), glassesMaterial);
        leftFrameRight.position.set(-0.14, 2.06, 1.0);
        character.add(leftFrameRight);

        // Right frame top
        const rightFrameTop = new THREE.Mesh(new THREE.BoxGeometry(frameWidth, frameThickness, frameThickness), glassesMaterial);
        rightFrameTop.position.set(0.35, 2.2, 1.0);
        character.add(rightFrameTop);
        // Right frame bottom
        const rightFrameBottom = new THREE.Mesh(new THREE.BoxGeometry(frameWidth, frameThickness, frameThickness), glassesMaterial);
        rightFrameBottom.position.set(0.35, 1.92, 1.0);
        character.add(rightFrameBottom);
        // Right frame left
        const rightFrameLeftSide = new THREE.Mesh(new THREE.BoxGeometry(frameThickness, frameHeight, frameThickness), glassesMaterial);
        rightFrameLeftSide.position.set(0.14, 2.06, 1.0);
        character.add(rightFrameLeftSide);
        // Right frame right
        const rightFrameRightSide = new THREE.Mesh(new THREE.BoxGeometry(frameThickness, frameHeight, frameThickness), glassesMaterial);
        rightFrameRightSide.position.set(0.56, 2.06, 1.0);
        character.add(rightFrameRightSide);

        // Bridge
        const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.12, frameThickness, frameThickness), glassesMaterial);
        bridge.position.set(0, 2.1, 1.0);
        character.add(bridge);

        // Eyebrows
        const eyebrowGeometry = new THREE.BoxGeometry(0.35, 0.08, 0.08);
        const eyebrowMaterial = new THREE.MeshLambertMaterial({ color: hairColor });

        const leftEyebrow = new THREE.Mesh(eyebrowGeometry, eyebrowMaterial);
        leftEyebrow.position.set(-0.35, 2.3, 0.95);
        leftEyebrow.rotation.z = 0.1;
        character.add(leftEyebrow);

        const rightEyebrow = new THREE.Mesh(eyebrowGeometry, eyebrowMaterial);
        rightEyebrow.position.set(0.35, 2.3, 0.95);
        rightEyebrow.rotation.z = -0.1;
        character.add(rightEyebrow);

        // Smile (wide friendly smile)
        const smileGeometry = new THREE.TorusGeometry(0.25, 0.05, 8, 16, Math.PI);
        const smileMaterial = new THREE.MeshLambertMaterial({ color: 0xcc6677 });
        const smile = new THREE.Mesh(smileGeometry, smileMaterial);
        smile.position.set(0, 1.7, 0.9);
        character.add(smile);

        // Teeth
        const teethGeometry = new THREE.BoxGeometry(0.35, 0.1, 0.05);
        const teethMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
        const teeth = new THREE.Mesh(teethGeometry, teethMaterial);
        teeth.position.set(0, 1.72, 0.92);
        character.add(teeth);

        // Nose
        const noseGeometry = new THREE.SphereGeometry(0.12, 16, 16);
        const noseMaterial = new THREE.MeshLambertMaterial({ color: 0xe8c4a8 });
        const nose = new THREE.Mesh(noseGeometry, noseMaterial);
        nose.position.set(0, 1.9, 1.0);
        nose.scale.set(0.8, 1, 0.7);
        character.add(nose);

        // Neck
        const neckGeometry = new THREE.CylinderGeometry(0.25, 0.3, 0.4, 16);
        const neckMaterial = new THREE.MeshLambertMaterial({ color: skinColor });
        const neck = new THREE.Mesh(neckGeometry, neckMaterial);
        neck.position.y = 0.9;
        character.add(neck);

        // Shirt collar
        const collarMaterial = new THREE.MeshLambertMaterial({ color: shirtColor });
        const collarGeometry = new THREE.CylinderGeometry(0.35, 0.4, 0.2, 16);
        const collar = new THREE.Mesh(collarGeometry, collarMaterial);
        collar.position.y = 0.75;
        character.add(collar);

        // Suit jacket (torso)
        const jacketGeometry = new THREE.CylinderGeometry(0.6, 0.75, 1.4, 16);
        const jacketMaterial = new THREE.MeshLambertMaterial({ color: suitColor });
        const jacket = new THREE.Mesh(jacketGeometry, jacketMaterial);
        jacket.position.y = -0.05;
        character.add(jacket);

        // Tie
        const tieTopGeometry = new THREE.BoxGeometry(0.15, 0.2, 0.08);
        const tieMaterial = new THREE.MeshLambertMaterial({ color: tieColor });
        const tieTop = new THREE.Mesh(tieTopGeometry, tieMaterial);
        tieTop.position.set(0, 0.55, 0.55);
        character.add(tieTop);

        const tieMiddleGeometry = new THREE.BoxGeometry(0.18, 0.5, 0.06);
        const tieMiddle = new THREE.Mesh(tieMiddleGeometry, tieMaterial);
        tieMiddle.position.set(0, 0.15, 0.6);
        character.add(tieMiddle);

        const tieBottomGeometry = new THREE.ConeGeometry(0.12, 0.25, 4);
        const tieBottom = new THREE.Mesh(tieBottomGeometry, tieMaterial);
        tieBottom.position.set(0, -0.2, 0.6);
        tieBottom.rotation.z = Math.PI / 4;
        character.add(tieBottom);

        // Crossed Arms
        const armGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.9, 16);
        const armMaterial = new THREE.MeshLambertMaterial({ color: suitColor });

        // Left arm (crossed)
        const leftArm = new THREE.Mesh(armGeometry, armMaterial);
        leftArm.position.set(-0.3, -0.1, 0.5);
        leftArm.rotation.z = 1.2;
        leftArm.rotation.x = 0.3;
        character.add(leftArm);

        // Right arm (crossed)
        const rightArm = new THREE.Mesh(armGeometry, armMaterial);
        rightArm.position.set(0.3, -0.1, 0.6);
        rightArm.rotation.z = -1.2;
        rightArm.rotation.x = 0.3;
        character.add(rightArm);

        // Hands
        const handGeometry = new THREE.SphereGeometry(0.15, 16, 16);
        const handMaterial = new THREE.MeshLambertMaterial({ color: skinColor });

        const leftHand = new THREE.Mesh(handGeometry, handMaterial);
        leftHand.position.set(0.45, -0.15, 0.7);
        character.add(leftHand);

        const rightHand = new THREE.Mesh(handGeometry, handMaterial);
        rightHand.position.set(-0.45, -0.2, 0.65);
        character.add(rightHand);

        // Add character to scene
        scene.add(character);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(2, 3, 4);
        scene.add(directionalLight);

        const rimLight = new THREE.DirectionalLight(0x00f5ff, 0.4);
        rimLight.position.set(-2, 1, -2);
        scene.add(rimLight);

        // Position camera
        camera.position.z = 5;
        camera.position.y = 1;

        // Mouse tracking for eyes
        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
        });

        // Animation
        let time = 0;
        function animate() {
            requestAnimationFrame(animate);
            time += 0.02;

            // Gentle floating animation
            character.position.y = Math.sin(time * 0.8) * 0.1;

            // Subtle rotation
            character.rotation.y = Math.sin(time * 0.3) * 0.08;

            // Eye tracking (follow mouse)
            const eyeOffsetX = mouseX * 0.04;
            const eyeOffsetY = mouseY * 0.03;
            leftPupil.position.x = -0.35 + eyeOffsetX;
            leftPupil.position.y = 2.05 + eyeOffsetY;
            rightPupil.position.x = 0.35 + eyeOffsetX;
            rightPupil.position.y = 2.05 + eyeOffsetY;
            leftShine.position.x = -0.32 + eyeOffsetX;
            leftShine.position.y = 2.08 + eyeOffsetY;
            rightShine.position.x = 0.38 + eyeOffsetX;
            rightShine.position.y = 2.08 + eyeOffsetY;

            // Subtle breathing
            jacket.scale.x = 1 + Math.sin(time * 2) * 0.015;
            jacket.scale.z = 1 + Math.sin(time * 2) * 0.015;

            renderer.render(scene, camera);
        }

        animate();

        // Handle resize
        const container = document.querySelector('.bitmoji-container');
        if (container) {
            const resizeObserver = new ResizeObserver(() => {
                const width = container.clientWidth;
                const height = container.clientHeight;
                renderer.setSize(width, height);
            });
            resizeObserver.observe(container);
        }

    } catch (error) {
        console.error('Bitmoji character error:', error);
    }
}

/* ============================================
   Three.js Neural Network Background
   ============================================ */
function initNeuralNetwork() {
    const canvas = document.getElementById('neural-bg');
    if (!canvas) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // Neural Network Parameters
    const config = {
        nodeCount: 150,
        connectionDistance: 180,
        nodeSize: 2,
        pulseSpeed: 0.02,
        rotationSpeed: 0.0003,
        mouseInfluence: 0.00008,
        colors: {
            primary: new THREE.Color(0x00f5ff),    // Cyan
            secondary: new THREE.Color(0x8b5cf6),  // Purple
            accent: new THREE.Color(0xf0abfc)      // Magenta
        }
    };

    // Mouse position tracking
    const mouse = {
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0
    };

    // Create nodes (neurons)
    const nodes = [];
    const nodeGeometry = new THREE.SphereGeometry(config.nodeSize, 16, 16);

    // Create node materials with glow effect
    const nodeMaterial = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0 },
            color1: { value: config.colors.primary },
            color2: { value: config.colors.secondary }
        },
        vertexShader: `
            varying vec3 vPosition;
            void main() {
                vPosition = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float time;
            uniform vec3 color1;
            uniform vec3 color2;
            varying vec3 vPosition;
            
            void main() {
                float intensity = 0.8 + 0.2 * sin(time * 2.0);
                vec3 color = mix(color1, color2, 0.5 + 0.5 * sin(time + vPosition.x * 0.1));
                gl_FragColor = vec4(color * intensity, 0.9);
            }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending
    });

    // Create nodes
    for (let i = 0; i < config.nodeCount; i++) {
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());

        // Distribute nodes in a 3D space
        node.position.x = (Math.random() - 0.5) * 800;
        node.position.y = (Math.random() - 0.5) * 500;
        node.position.z = (Math.random() - 0.5) * 400;

        // Store original position and random properties
        node.userData = {
            originalPosition: node.position.clone(),
            phase: Math.random() * Math.PI * 2,
            speed: 0.5 + Math.random() * 0.5,
            amplitude: 10 + Math.random() * 20
        };

        nodes.push(node);
        scene.add(node);
    }

    // Create connections (synapses)
    const connections = [];
    const connectionMaterial = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0 },
            color1: { value: config.colors.primary },
            color2: { value: config.colors.secondary }
        },
        vertexShader: `
            attribute float alpha;
            varying float vAlpha;
            varying vec3 vPosition;
            
            void main() {
                vAlpha = alpha;
                vPosition = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float time;
            uniform vec3 color1;
            uniform vec3 color2;
            varying float vAlpha;
            varying vec3 vPosition;
            
            void main() {
                float pulse = 0.5 + 0.5 * sin(time * 3.0 + vPosition.x * 0.01);
                vec3 color = mix(color1, color2, pulse);
                gl_FragColor = vec4(color, vAlpha * 0.4 * pulse);
            }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    // Function to create connections
    function createConnections() {
        // Remove old connections
        connections.forEach(conn => {
            scene.remove(conn);
            conn.geometry.dispose();
        });
        connections.length = 0;

        // Create new connections based on distance
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const distance = nodes[i].position.distanceTo(nodes[j].position);

                if (distance < config.connectionDistance) {
                    const positions = new Float32Array([
                        nodes[i].position.x, nodes[i].position.y, nodes[i].position.z,
                        nodes[j].position.x, nodes[j].position.y, nodes[j].position.z
                    ]);

                    const alphas = new Float32Array([
                        1 - (distance / config.connectionDistance),
                        1 - (distance / config.connectionDistance)
                    ]);

                    const geometry = new THREE.BufferGeometry();
                    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                    geometry.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));

                    const line = new THREE.Line(geometry, connectionMaterial);
                    connections.push(line);
                    scene.add(line);
                }
            }
        }
    }

    // Create neural pulses (traveling signals)
    const pulses = [];
    const pulseGeometry = new THREE.SphereGeometry(3, 8, 8);
    const pulseMaterial = new THREE.MeshBasicMaterial({
        color: 0x00f5ff,
        transparent: true,
        opacity: 0.8
    });

    function createPulse() {
        if (connections.length === 0) return;

        const connectionIndex = Math.floor(Math.random() * connections.length);
        const connection = connections[connectionIndex];
        if (!connection) return;

        const positions = connection.geometry.attributes.position.array;

        const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial.clone());
        pulse.position.set(positions[0], positions[1], positions[2]);

        pulse.userData = {
            startPos: new THREE.Vector3(positions[0], positions[1], positions[2]),
            endPos: new THREE.Vector3(positions[3], positions[4], positions[5]),
            progress: 0,
            speed: 0.02 + Math.random() * 0.03
        };

        pulses.push(pulse);
        scene.add(pulse);
    }

    // Create initial connections
    createConnections();

    // Spawn pulses periodically
    setInterval(createPulse, 200);

    // Position camera
    camera.position.z = 400;

    // Animation loop
    let time = 0;
    function animate() {
        requestAnimationFrame(animate);
        time += config.pulseSpeed;

        // Update mouse influence with smoothing
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        // Rotate scene based on mouse
        scene.rotation.y += config.rotationSpeed + mouse.x * config.mouseInfluence;
        scene.rotation.x += mouse.y * config.mouseInfluence * 0.5;

        // Animate nodes
        nodes.forEach((node, index) => {
            const userData = node.userData;

            // Floating animation
            node.position.y = userData.originalPosition.y +
                Math.sin(time * userData.speed + userData.phase) * userData.amplitude;
            node.position.x = userData.originalPosition.x +
                Math.cos(time * userData.speed * 0.5 + userData.phase) * userData.amplitude * 0.5;

            // Update shader time
            node.material.uniforms.time.value = time;

            // Pulsing size
            const scale = 1 + 0.3 * Math.sin(time * 2 + index * 0.1);
            node.scale.setScalar(scale);
        });

        // Update connection positions
        let connectionIndex = 0;
        for (let i = 0; i < nodes.length && connectionIndex < connections.length; i++) {
            for (let j = i + 1; j < nodes.length && connectionIndex < connections.length; j++) {
                const distance = nodes[i].position.distanceTo(nodes[j].position);

                if (distance < config.connectionDistance) {
                    const connection = connections[connectionIndex];
                    if (connection) {
                        const positions = connection.geometry.attributes.position.array;
                        positions[0] = nodes[i].position.x;
                        positions[1] = nodes[i].position.y;
                        positions[2] = nodes[i].position.z;
                        positions[3] = nodes[j].position.x;
                        positions[4] = nodes[j].position.y;
                        positions[5] = nodes[j].position.z;
                        connection.geometry.attributes.position.needsUpdate = true;

                        connection.material.uniforms.time.value = time;
                    }
                    connectionIndex++;
                }
            }
        }

        // Animate pulses
        for (let i = pulses.length - 1; i >= 0; i--) {
            const pulse = pulses[i];
            pulse.userData.progress += pulse.userData.speed;

            if (pulse.userData.progress >= 1) {
                scene.remove(pulse);
                pulse.geometry.dispose();
                pulse.material.dispose();
                pulses.splice(i, 1);
            } else {
                pulse.position.lerpVectors(
                    pulse.userData.startPos,
                    pulse.userData.endPos,
                    pulse.userData.progress
                );
                pulse.material.opacity = Math.sin(pulse.userData.progress * Math.PI) * 0.8;
            }
        }

        renderer.render(scene, camera);
    }

    animate();

    // Handle mouse movement
    document.addEventListener('mousemove', (event) => {
        mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.targetY = (event.clientY / window.innerHeight) * 2 - 1;
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

/* ============================================
   Navigation
   ============================================ */
function initNavigation() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Scroll effect on navigation
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Update active nav link based on scroll position
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    });
}

/* ============================================
   Name Typing Effect
   ============================================ */
function initNameTypingEffect() {
    const nameElement = document.querySelector('.name-typing-text');
    if (!nameElement) return;

    const name = 'NITHIN DATTA GUTTULA';
    let charIndex = 0;
    const typingSpeed = 120;

    function typeName() {
        if (charIndex < name.length) {
            nameElement.textContent = name.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeName, typingSpeed);
        } else {
            // Hide cursor after typing is complete
            const cursor = document.querySelector('.name-cursor');
            if (cursor) {
                setTimeout(() => {
                    cursor.classList.add('hidden');
                }, 500);
            }
        }
    }

    // Start typing after a small delay
    setTimeout(typeName, 300);
}


/* ============================================
   Typing Effect
   ============================================ */
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const texts = [
        'AI/ML Engineer',
        'Data Scientist',
        'Deep Learning Enthusiast',
        'Problem Solver',
        'Python Developer'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before next word
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

/* ============================================
   Scroll Animations
   ============================================ */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Trigger skill animations
                if (entry.target.classList.contains('skills-section')) {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    document.querySelectorAll('.skill-category, .experience-card, .project-card, .education-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

/* ============================================
   Counter Animation
   ============================================ */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseFloat(element.getAttribute('data-count'));
    const duration = 2000;
    const startTime = performance.now();
    const isDecimal = target % 1 !== 0;

    // Determine decimal places from the original value
    const decimalPlaces = (target.toString().split('.')[1] || '').length;

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = target * easeOutQuart;

        element.textContent = isDecimal ? current.toFixed(decimalPlaces) : Math.floor(current);

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = isDecimal ? target.toFixed(decimalPlaces) : target;
        }
    }

    requestAnimationFrame(update);
}

/* ============================================
   Skill Bar Animations
   ============================================ */
function initSkillAnimations() {
    // Skills will be animated when section is visible
}

function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('animate');
        }, index * 100);
    });
}

/* ============================================
   Mobile Menu
   ============================================ */
function initMobileMenu() {
    const hamburger = document.querySelector('.nav-hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Hamburger animation
    const hamburgerSpans = hamburger.querySelectorAll('span');
    hamburger.addEventListener('click', () => {
        if (hamburger.classList.contains('active')) {
            hamburgerSpans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            hamburgerSpans[1].style.opacity = '0';
            hamburgerSpans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            hamburgerSpans[0].style.transform = 'none';
            hamburgerSpans[1].style.opacity = '1';
            hamburgerSpans[2].style.transform = 'none';
        }
    });
}

/* ============================================
   Smooth Scroll
   ============================================ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================
   Additional Interactive Effects
   ============================================ */

// Magnetic effect for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
    });
});

// Parallax effect for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        card.style.transform = `
            perspective(1000px)
            rotateY(${x * 10}deg)
            rotateX(${-y * 10}deg)
            translateY(-10px)
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// Terminal typing effect
const terminalLines = document.querySelectorAll('.terminal-output');
terminalLines.forEach((line, index) => {
    line.style.opacity = '0';
    setTimeout(() => {
        line.style.transition = 'opacity 0.5s ease';
        line.style.opacity = '1';
    }, 500 + index * 300);
});

// Education grade bar animation
const observerGrade = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target.querySelector('.grade-fill');
            if (fill) {
                fill.style.width = fill.style.getPropertyValue('--grade');
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.edu-grade').forEach(grade => {
    const fill = grade.querySelector('.grade-fill');
    if (fill) {
        fill.style.width = '0%';
        observerGrade.observe(grade);
    }
});

// Contact card hover effect
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.contact-icon');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(10deg)';
        }
    });

    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.contact-icon');
        if (icon) {
            icon.style.transform = '';
        }
    });
});

// Add glow effect on scroll to active section
let currentSection = '';
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;

        if (isVisible && section.id !== currentSection) {
            currentSection = section.id;

            // Add subtle glow to section header
            const header = section.querySelector('.section-title');
            if (header) {
                header.style.textShadow = '0 0 20px rgba(0, 245, 255, 0.5)';
                setTimeout(() => {
                    header.style.textShadow = '';
                }, 500);
            }
        }
    });
});

// Console Easter Egg
console.log(`
%c╔═══════════════════════════════════════════╗
║                                           ║
║   👋 Hello, curious developer!            ║
║                                           ║
║   Thanks for checking out my portfolio!   ║
║   Built with ❤️ using Three.js            ║
║                                           ║
║   - Nithin Datta Guttula                  ║
║     AI/ML Engineer                        ║
║                                           ║
╚═══════════════════════════════════════════╝
`, 'color: #00f5ff; font-family: monospace; font-size: 12px;');

/* ============================================
   Admin Login & Portfolio Editor
   ============================================ */

// Admin Configuration
const ADMIN_CONFIG = {
    // Admin credentials
    // Username: Nithindattaguttula, Password: Nithin123.
    username: 'Nithindattaguttula',
    // SHA-256 hash of 'Nithin123.'
    passwordHash: '29e5857e6de93a8c78c010e18ec7b8b3d55770649ee5526e1572a33c23fd6acd',
    sessionKey: 'portfolio_admin_session'
};

// Simple hash function (SHA-256)
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Initialize Admin Module
function initAdminModule() {
    const adminTrigger = document.getElementById('admin-trigger');
    const loginOverlay = document.getElementById('login-overlay');
    const loginForm = document.getElementById('login-form');
    const modalClose = document.getElementById('modal-close');
    const loginError = document.getElementById('login-error');
    const adminToolbar = document.getElementById('admin-toolbar');
    const saveBtn = document.getElementById('save-changes');
    const discardBtn = document.getElementById('discard-changes');
    const logoutBtn = document.getElementById('admin-logout');

    if (!adminTrigger || !loginOverlay) return;

    // Check for existing session
    if (sessionStorage.getItem(ADMIN_CONFIG.sessionKey)) {
        enableAdminMode();
    }

    // Open login modal on image click
    adminTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        // If already logged in, don't show modal
        if (document.body.classList.contains('admin-mode')) {
            showToast('Already in admin mode!', 'success');
            return;
        }

        loginOverlay.classList.add('active');
        document.getElementById('admin-username').focus();
    });

    // Close modal
    modalClose.addEventListener('click', () => {
        closeLoginModal();
    });

    // Close on overlay click
    loginOverlay.addEventListener('click', (e) => {
        if (e.target === loginOverlay) {
            closeLoginModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && loginOverlay.classList.contains('active')) {
            closeLoginModal();
        }
    });

    // Handle login form submit
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('admin-username').value.trim();
        const password = document.getElementById('admin-password').value;

        if (!username || !password) {
            showLoginError('Please fill in all fields');
            return;
        }

        try {
            const hashedPassword = await hashPassword(password);

            if (username === ADMIN_CONFIG.username && hashedPassword === ADMIN_CONFIG.passwordHash) {
                // Successful login - redirect to admin dashboard
                sessionStorage.setItem(ADMIN_CONFIG.sessionKey, 'true');
                closeLoginModal();
                showToast('Login successful! Redirecting to admin dashboard...', 'success');
                setTimeout(() => {
                    window.location.href = 'admin.html';
                }, 1000);
            } else {
                showLoginError('Invalid credentials');
            }
        } catch (err) {
            showLoginError('Authentication error');
            console.error(err);
        }
    });

    // Save changes
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            savePortfolioChanges();
        });
    }

    // Discard changes
    if (discardBtn) {
        discardBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to discard all changes?')) {
                localStorage.removeItem('portfolio_content');
                location.reload();
            }
        });
    }

    // Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            disableAdminMode();
            showToast('Logged out successfully', 'success');
        });
    }

    // Load saved content on page load
    loadSavedContent();
}

function closeLoginModal() {
    const loginOverlay = document.getElementById('login-overlay');
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');

    loginOverlay.classList.remove('active');
    loginForm.reset();
    loginError.textContent = '';
}

function showLoginError(message) {
    const loginError = document.getElementById('login-error');
    loginError.textContent = '⚠️ ' + message;
    loginError.classList.add('shake');

    setTimeout(() => {
        loginError.classList.remove('shake');
    }, 500);
}

function enableAdminMode() {
    document.body.classList.add('admin-mode');

    const adminToolbar = document.getElementById('admin-toolbar');
    if (adminToolbar) {
        adminToolbar.classList.add('active');
    }

    // Make editable elements
    makeContentEditable();
}

function disableAdminMode() {
    document.body.classList.remove('admin-mode');
    sessionStorage.removeItem(ADMIN_CONFIG.sessionKey);

    const adminToolbar = document.getElementById('admin-toolbar');
    if (adminToolbar) {
        adminToolbar.classList.remove('active');
    }

    // Remove contenteditable
    document.querySelectorAll('.editable').forEach(el => {
        el.removeAttribute('contenteditable');
        el.classList.remove('editable');
    });
}

function makeContentEditable() {
    // Define editable selectors
    const editableSelectors = [
        // About section
        '.terminal-output',
        '.edu-institution',
        '.edu-content h4',

        // Hero section
        '.hero-description',

        // Skills section
        '.skill-name',
        '.skill-level',

        // Experience section
        '.exp-title',
        '.exp-company',
        '.exp-date',
        '.exp-location',
        '.project-title',
        '.project-desc',
        '.exp-highlights li',

        // Projects section
        '.project-name',
        '.project-description',

        // Contact section
        '.contact-intro',
        '.contact-value',

        // Footer
        '.footer-brand p'
    ];

    editableSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('editable');
            el.setAttribute('contenteditable', 'true');

            // Prevent default link behavior when editing
            el.addEventListener('click', (e) => {
                if (document.body.classList.contains('admin-mode')) {
                    e.preventDefault();
                }
            });
        });
    });
}

function savePortfolioChanges() {
    const content = {};

    // Collect all editable content
    document.querySelectorAll('.editable').forEach((el, index) => {
        const key = generateElementKey(el, index);
        content[key] = el.innerHTML;
    });

    // Save to localStorage
    try {
        localStorage.setItem('portfolio_content', JSON.stringify(content));
        showToast('Changes saved successfully!', 'success');
    } catch (e) {
        showToast('Error saving changes', 'error');
        console.error(e);
    }
}

function loadSavedContent() {
    try {
        const saved = localStorage.getItem('portfolio_content');
        if (!saved) return;

        const content = JSON.parse(saved);

        document.querySelectorAll('.editable, [data-editable]').forEach((el, index) => {
            const key = generateElementKey(el, index);
            if (content[key]) {
                el.innerHTML = content[key];
            }
        });

        // Also try to restore content for elements that will become editable
        const editableSelectors = [
            '.terminal-output',
            '.edu-institution',
            '.edu-content h4',
            '.hero-description',
            '.skill-name',
            '.skill-level',
            '.exp-title',
            '.exp-company',
            '.exp-date',
            '.exp-location',
            '.project-title',
            '.project-desc',
            '.exp-highlights li',
            '.project-name',
            '.project-description',
            '.contact-intro',
            '.contact-value',
            '.footer-brand p'
        ];

        editableSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach((el, index) => {
                const key = `${selector}_${index}`;
                if (content[key]) {
                    el.innerHTML = content[key];
                }
            });
        });

    } catch (e) {
        console.error('Error loading saved content:', e);
    }
}

function generateElementKey(el, index) {
    // Generate a unique key based on element's selector path
    const classes = Array.from(el.classList).filter(c => c !== 'editable').join('.');
    const tag = el.tagName.toLowerCase();
    return `${tag}.${classes}_${index}`;
}

// Toast notification system
function showToast(message, type = 'success') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `${type === 'success' ? '✓' : '⚠️'} ${message}`;
    document.body.appendChild(toast);

    // Show toast
    setTimeout(() => {
        toast.classList.add('active');
    }, 10);

    // Hide toast after delay
    setTimeout(() => {
        toast.classList.remove('active');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Initialize admin module when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdminModule);
} else {
    initAdminModule();
}

