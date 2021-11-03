using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    public int gold;
    public TextMeshProUGUI goldText;

    public Sprite[] backgrounds;
    private int curBackground;
    private int enemiesUntilBackgroundChange;
    public Image backgroundImage;

    public static GameManager instance;

    void Awake ()
    {
        instance = this;
        enemiesUntilBackgroundChange = 5;
    }

    // gives us gold
    public void AddGold (int amount)
    {
        gold += amount;
        goldText.text = "Gold: " + gold.ToString();
    }

    // takes gold away from us
    public void TakeGold (int amount)
    {
        gold -= amount;
        goldText.text = "Gold: " + gold.ToString();
    }

    // called when an enemy is defeated
    public void BackgroundCheck ()
    {
        enemiesUntilBackgroundChange--;

        // do we change the background now?
        if(enemiesUntilBackgroundChange == 0)
        {
            enemiesUntilBackgroundChange = 5;

            curBackground++;

            // if we're at the end of the backgrounds array
            // start from the beginning again
            if(curBackground == backgrounds.Length)
            {
                curBackground = 0;
            }

            // set the new background
            backgroundImage.sprite = backgrounds[curBackground];
        }
    }
}