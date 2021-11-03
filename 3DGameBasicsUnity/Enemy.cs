using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy : MonoBehaviour
{
    public float speed;
    public Vector3 moveDirection;
    public float moveDistance;

    private Vector3 startPosition;
    private bool movingToStart;


    // Start is called before the first frame update
    void Start()
    {
        
        startPosition = transform.position;    
    }

    // Update is called once per frame
    void Update()
    {
        //are we moving to the start?
        if (movingToStart)
        {
            // move towards the start position over time
            transform.position = Vector3.MoveTowards(transform.position, startPosition, speed * Time.deltaTime);

            // have we reached our target yet
            if(transform.position == startPosition)
            {
                movingToStart = false;
            }
        }
        // moving away from start?
        else
        {
            transform.position = Vector3.MoveTowards(transform.position, startPosition + (moveDirection * moveDistance), speed * Time.deltaTime);
            
            if(transform.position == startPosition + (moveDirection * moveDistance))
            {
                movingToStart = true;
            }
        }
    }

    private void OnTriggerEnter(Collider other)
    {
        //If the collider tag is 'Player'...
        if (other.CompareTag("Player"))
        {
            //Call GameOver() that is inside "Player" class.
            other.GetComponent<Player>().GameOver();
        }
    }
}
