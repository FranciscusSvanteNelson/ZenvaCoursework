using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Player : MonoBehaviour
{
    public float moveSpeed;
    public Rigidbody rig;
    public float jumpForce;
    private bool isGrounded;


    // Update is called once per frame
    void Update()
    {
        // Get the horizontal and verical inputs
        float x = Input.GetAxis("Horizontal") * moveSpeed;
        float z = Input.GetAxis("Vertical") * moveSpeed;
        
        // Set velocity based on inputs
        rig.velocity = new Vector3(x, rig.velocity.y, z);

        // create a copy of the velocity variable and
        // set the Y axis to be 0
        Vector3 vel = rig.velocity;
        vel.y = 0;

        // if the player is moving, rotate to face the direction in which they move
        if(vel.x != 0 || vel.z != 0)
        {
            transform.forward = vel;
        }
        // Jumping
        if(Input.GetKeyDown(KeyCode.Space) && isGrounded == true)
        {
            isGrounded = false;
            rig.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
        }

        //Game over if we fall 10m off the platform
        if (transform.position.y < -10)
        {
            GameOver();
        }



    }
    private void OnCollisionEnter(Collision collision)
    {
        if(collision.contacts[0].normal == Vector3.up)
        {
            isGrounded = true;
        }
    }
    public void GameOver()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
    }
}
