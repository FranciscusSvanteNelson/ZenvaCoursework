using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Enemy : MonoBehaviour
{
    public int curHp;
    public int maxHp;
    public int goldToGive;
    public Image healthBarFill;
    public Animation anim;

    // called when the enemy is clicked on
    public void Damage ()
    {
        // update the health and health bar
        curHp--;
        healthBarFill.fillAmount = (float)curHp / (float)maxHp;

        // play the animation
        anim.Stop();
        anim.Play();

        // are we defeated?
        if(curHp <= 0)
        {
            Defeated();
        }
    }

    // called when the enemy's health reaches 0
    public void Defeated ()
    {
        GameManager.instance.AddGold(goldToGive);
        EnemyManager.instance.DefeatEnemy(gameObject);
    }
}